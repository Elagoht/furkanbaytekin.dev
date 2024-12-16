import Environment from "../Environment"

class ApiCall {
  private static fetch = <T>(
    url: string,
    method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH",
    headers?: Record<string, string>,
    body?: Record<string, unknown> | FormData,
    next: RequestInit["next"] = undefined
  ) => fetch(url.startsWith("http")
    ? url
    : new URL(url, Environment.CMS_API_URL).toString(), {
    method,
    headers: {
      ...(body instanceof FormData
        ? {}
        : { "Content-Type": "application/json" }
      ),
      ...headers
    },
    body: body instanceof FormData
      ? body
      : JSON.stringify(body),
    next
  }) as Promise<{
    json: () => Promise<T>
  } & Response>

  public static get = async <T>(
    url: string,
    headers?: Record<string, string>,
    next?: RequestInit["next"]
  ) => await ApiCall.fetch<T>(
    url, "GET", headers, undefined, next
  )

  public static post = async <T>(
    url: string,
    body?: Record<string, unknown> | FormData,
    headers?: Record<string, string>,
    next?: RequestInit["next"]
  ) => await ApiCall.fetch<T>(
    url, "POST", headers, body, next
  )

  public static put = async <T>(
    url: string,
    body?: Record<string, unknown> | FormData,
    headers?: Record<string, string>,
    next?: RequestInit["next"]
  ) => await ApiCall.fetch<T>(
    url, "PUT", headers, body, next
  )

  public static delete = async <T>(
    url: string,
    headers?: Record<string, string>,
    next?: RequestInit["next"]
  ) => await ApiCall.fetch<T>(
    url, "DELETE", headers, undefined, next
  )

  public static patch = async <T>(
    url: string,
    body?: Record<string, unknown> | FormData,
    headers?: Record<string, string>,
    next?: RequestInit["next"]
  ) => await ApiCall.fetch<T>(
    url, "PATCH", headers, body, next
  )
}

export class FetchError extends Error {
  constructor() {
    super("Fetch Error")
    this.name = "FetchError"
  }
}

export default ApiCall