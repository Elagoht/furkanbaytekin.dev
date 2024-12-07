import ApiCall from "@/utility/ApiCall"

export const getProjects = (
) => ApiCall.get<GithubProject[]>(
  "https://api.github.com/users/Elagoht/repos?sort=pushed&per_page=100"
).then(response =>
  response.json()
)