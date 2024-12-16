import ApiCall from "../ApiCall"
import Dictate from "../Dictionary"
import Environment from "../Environment"

class Github {
  public static readonly username = Dictate.en.metadata.github

  public static getTotalProjectCount = async (): Promise<number> => {
    const profile = await ApiCall.get<GithubProfile>(
      `${Environment.HOST_URL}/api/github/user`
    ).then(response => response.json())

    return profile.public_repos
  }

  public static getProjects = async (
    page: number = 1
  ): Promise<GithubProject[]> => {
    const projects = await ApiCall.get<GithubProject[]>(
      `${Environment.HOST_URL}/api/github/projects`
    ).then(response => response.json())

    return projects?.slice?.(
      (page - 1) * Environment.PAGINATE_BY,
      page * Environment.PAGINATE_BY
    ) ?? []
  }
}

export default Github