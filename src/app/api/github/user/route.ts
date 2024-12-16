import ApiCall from "@/utilities/ApiCall"
import Github from "@/utilities/Github"

export const GET = async () => {
  try {
    const projects = await ApiCall.get<GithubProfile>(
      `https://api.github.com/users/${Github.username}`
    ).then(response => response.json())

    return Response.json(projects, {
      headers: { "Cache-Control": "public, max-age=3600" }
    })
  } catch {
    return Response.json([], {
      headers: { "Cache-Control": "public, max-age=3600" }
    })
  }
}