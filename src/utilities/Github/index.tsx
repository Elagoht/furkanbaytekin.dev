import QueryString from "qs"
import ApiCall from "../ApiCall"
import Dictate from "../Dictionary"
import { cache } from "react"

class Github {
  private static readonly username = Dictate.en.metadata.github

  public static getAllProjects = cache(async (): Promise<GithubProject[]> => {
    return ApiCall.get<GithubProject[]>(
      `https://api.github.com/users/${Github.username
      }/repos?${QueryString.stringify({
        sort: "pushed",
        direction: "desc",
        // please don't have more than 1000 repos :)
        per_page: 1000
      })}`).then(response => response.json())
  })
}

export default Github