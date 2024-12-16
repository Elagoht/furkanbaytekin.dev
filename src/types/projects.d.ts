/**
 * Used properties cherry-picked from the Github API response
 */
type GithubProject = {
  id: string
  name: string
  html_url: string
  description: string
  pushed_at: string
  homepage: string
  stargazers_count: number
  language: string
  archived: boolean
  forks: number
  license: {
    name: string
  }
}

/**
 * Used properties cherry-picked from the Github API response
 */
type GithubProfile = {
  public_repos: number
}