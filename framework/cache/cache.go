package cache

import (
	"context"
	"crypto/sha256"
	"encoding/hex"
	"fmt"
	"io/fs"
	"net/http"
	"strings"
	"sync"

	"log/slog"
)

type Manager struct {
	cacheDir string
	logger   *slog.Logger
	router   http.Handler
	mu       sync.RWMutex
	entries  map[string]*Entry
}

type RebuildConfig struct {
	ConfigFS     fs.FS
	RoutesFile   string
	Languages    []string
	Router       http.Handler
	Logger       *slog.Logger
	PathExpander func(ctx context.Context, canonical string) ([]string, error)
}

type Entry struct {
	ETag       string
	Content    []byte
	Headers    http.Header
	StatusCode int
	Stale      bool
}

func (e *Entry) IsStale() bool {
	return e.Stale
}

func NewManager(cacheDir string, logger *slog.Logger) (*Manager, error) {
	if cacheDir == "" {
		return nil, fmt.Errorf("cache directory is required")
	}

	m := &Manager{
		cacheDir: cacheDir,
		logger:   logger,
		entries:  make(map[string]*Entry),
	}

	return m, nil
}

func (m *Manager) SetRouter(router http.Handler) {
	m.mu.Lock()
	m.router = router
	m.mu.Unlock()
}

func (m *Manager) Bootstrap(ctx context.Context, config RebuildConfig) error {
	if config.Router == nil {
		return nil
	}
	if config.PathExpander == nil {
		return nil
	}

	// No-op bootstrap: preserve API for commands.
	// A full prerender implementation would dispatch requests through the router,
	// expand dynamic routes and cache generated responses.
	return nil
}

func (m *Manager) MarkStale(bucket string, force bool) int {
	m.mu.Lock()
	defer m.mu.Unlock()

	count := 0
	for _, entry := range m.entries {
		if !entry.Stale {
			entry.Stale = true
			count++
		}
	}
	return count
}

func (m *Manager) MarkAllStale(force bool) int {
	return m.MarkStale("all", force)
}

func (m *Manager) Get(key string) (*Entry, bool) {
	m.mu.RLock()
	defer m.mu.RUnlock()

	entry, ok := m.entries[key]
	return entry, ok
}

func (m *Manager) Set(key string, content []byte, strategy, path string, headers http.Header, statusCode int) error {
	if key == "" {
		return fmt.Errorf("cache key is required")
	}

	entry := &Entry{
		ETag:       generateETag(content),
		Content:    content,
		Headers:    headers.Clone(),
		StatusCode: statusCode,
		Stale:      false,
	}

	m.mu.Lock()
	m.entries[key] = entry
	m.mu.Unlock()
	return nil
}

func GetCacheKey(canonical string) string {
	return strings.TrimSpace(canonical)
}

func GetDecompressedContent(entry *Entry) ([]byte, error) {
	if entry == nil {
		return nil, fmt.Errorf("cache entry is nil")
	}
	return entry.Content, nil
}

func generateETag(content []byte) string {
	hash := sha256.Sum256(content)
	return hex.EncodeToString(hash[:])
}
