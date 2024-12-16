import ApiCall from "@/utilities/ApiCall"
import Github from "@/utilities/Github"
import QueryString from "qs"

export const GET = async () => {
  try {
    const projects = await ApiCall.get<GithubProject[]>(
      `https://api.github.com/users/${Github.username
      }/repos?${QueryString.stringify({
        sort: "pushed",
        direction: "desc",
        // please don't have more than 1000 repos :)
        per_page: 1000
      })}`, {
    }).then(response => response.json())

    return Response.json(projects, {
      headers: { "Cache-Control": "public, max-age=3600" }
    })
  } catch {
    return Response.json([], {
      headers: { "Cache-Control": "public, max-age=3600" }
    })
  }
}