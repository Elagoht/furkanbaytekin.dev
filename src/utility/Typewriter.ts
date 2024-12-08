import hljs from "highlight.js"
import MarkdownIt from "markdown-it"
import abbr from "markdown-it-abbr"
import anchor from "markdown-it-anchor"
import deflist from "markdown-it-deflist"
import emoji from "markdown-it-emoji"
import expandable from "markdown-it-expandable"
import footnote from "markdown-it-footnote"
import iframe from "markdown-it-iframe"
import ins from "markdown-it-ins"
import mark from "markdown-it-mark"
import smartarrows from "markdown-it-smartarrows"
import sub from "markdown-it-sub"
import sup from "markdown-it-sup"
import task from "markdown-it-task-lists"
import { escapeHtml } from "markdown-it/lib/common/utils.mjs"

class TypeWriter {
  private static wordsPerMinute = 200

  public static markdownToHtml = (
    content: string
  ): string => {
    const converter = new MarkdownIt({
      highlight: (str, lang) => {
        const begin = `<div class="code-container"><div class="code-header"><span class="code-lang">${lang
          }</span><button type="button" class="code-copy" onclick="navigator.clipboard.writeText(\`${escapeHtml(
            str
          ).replace(
            /`/g, "\\`"
          ).replace(
            /\$/g, "\\$"
          )}\`)">📋</button></div><div class="hljs">`
        const end = "</div></div>"

        if (lang && hljs.getLanguage(lang))
          try {
            return begin + hljs.highlight(str, {
              language: lang
            }).value + end
          }
          catch { return begin + escapeHtml(str) + end }
        return begin + escapeHtml(str) + end
      },
      html: true,
      breaks: false,
      linkify: true,
      typographer: true,
      quotes: "“”‘’"
    }).use(emoji).use(abbr).use(deflist).use(sup).use(sub)
      .use(footnote).use(ins).use(mark).use(task).use(iframe)
      .use(expandable).use(smartarrows).use(anchor, {
        permalink: anchor.permalink.headerLink({ safariReaderFix: true })
      })

    return converter.render(content)
  }

  public static readTime = (
    text: string
  ): number => Math.ceil(
    text.split(
      /\s+/
    ).filter(word =>
      word.length > 0
    ).length / TypeWriter.wordsPerMinute
  )
}

export default TypeWriter