import Environment from "../Environment"

class ApiCall {
  private static fetch = <T>(
    url: string,
    method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH",
    headers?: Record<string, string>,
    body?: Record<string, unknown> | FormData,
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
      : JSON.stringify(body)
  }) as Promise<{
    json: () => Promise<T>
  } & Response>

  public static get = async <T>(
    url: string,
    headers?: Record<string, string>,
  ) => await ApiCall.fetch<T>(
    url, "GET", headers, undefined
  )

  public static post = async <T>(
    url: string,
    body?: Record<string, unknown> | FormData,
    headers?: Record<string, string>,
  ) => await ApiCall.fetch<T>(
    url, "POST", headers, body
  )

  public static put = async <T>(
    url: string,
    body?: Record<string, unknown> | FormData,
    headers?: Record<string, string>,
  ) => await ApiCall.fetch<T>(
    url, "PUT", headers, body
  )

  public static delete = async <T>(
    url: string,
    headers?: Record<string, string>,
  ) => await ApiCall.fetch<T>(
    url, "DELETE", headers, undefined
  )

  public static patch = async <T>(
    url: string,
    body?: Record<string, unknown> | FormData,
    headers?: Record<string, string>,
  ) => await ApiCall.fetch<T>(
    url, "PATCH", headers, body
  )
}

export class FetchError extends Error {
  constructor() {
    super("Fetch Error")
    this.name = "FetchError"
  }
}

export default ApiCall