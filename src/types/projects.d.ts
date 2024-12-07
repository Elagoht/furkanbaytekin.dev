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
  license: {
    name: string
  },
  forks: number
}