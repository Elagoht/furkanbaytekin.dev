import QueryString from "qs"
import ApiCall from "../ApiCall"
import Environment from "../Environment"
import Dictate from "../Dictionary"

class Github {
  private static readonly username = Dictate.en.metadata.github

  public static getTotalProjectCount = async (): Promise<number> => {
    return ApiCall.get<{ public_repos: number }>(
      `https://api.github.com/users/${Github.username}`
    ).then(response => response.json()
    ).then(data => Number(data.public_repos)
    ).then(count => Math.ceil(count / Environment.PAGINATE_BY))
  }

  public static getAllProjects = async (
    page: number = 1
  ): Promise<GithubProject[]> => {
    return await ApiCall.get<GithubProject[]>(
      `https://api.github.com/users/${Github.username
      }/repos?${QueryString.stringify({
        page,
        sort: "pushed",
        per_page: Environment.PAGINATE_BY
      })}`
    ).then(response => response.json())
  }
}

export default Github