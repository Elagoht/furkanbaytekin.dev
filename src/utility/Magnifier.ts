class Magnifier {
  private readonly searchParams: URLSearchParams

  private get = <T = string>(key: string): T => this.searchParams.get(key) as T

  public constructor(
    searchParams: URLSearchParams | Record<string, string | undefined>
  ) {
    if (searchParams instanceof URLSearchParams) {
      this.searchParams = searchParams
      return
    }
    this.searchParams = new URLSearchParams()
    for (const key in searchParams) if (
      searchParams[key]
    ) this.searchParams.append(
      key,
      searchParams[key]!
    )
  }

  public truthy = (
    key: string,
    fallback: boolean = false
  ): boolean => ![
    "false", "0"
  ].includes(this.get(key) || fallback.toString())

  public falsy = (
    key: string,
    fallback: boolean = true
  ): boolean => {
    const value = this.get(key)
    return ["false", "0", "", null, undefined].includes(value !== null
      ? value
      : fallback.toString()
    )
  }

  public boolean = (
    key: string,
    fallback?: boolean
  ): boolean | undefined => {
    const value = this.get(key)
    if (!value) return fallback
    if (["true", "1"].includes(value)) return true
    if (["false", "0"].includes(value)) return false
    return fallback
  }

  public array = (
    key: string,
    fallback?: string[]
  ): string[] | undefined => {
    const value = this.get(key)
    if (!value) return fallback
    return value.split(",")
  }

  public number = (
    key: string,
    fallback?: number
  ): number => {
    const value = this.get(key)
    if (value === null) return fallback ?? NaN
    const numberValue = Number(value)
    return isNaN(numberValue) ? fallback ?? NaN : numberValue
  }

  public string = <T extends string>(
    key: string,
    fallback: string = ""
  ): T => (this.get(key) || fallback) as T

  public oneOf = <T>(
    key: string,
    options: T[],
    fallback?: T
  ): T | undefined => options.includes(
    this.get<T>(key)
  ) ? this.get<T>(key) : fallback

  public oneOfOrDefault = <T>(
    key: string,
    options: T[],
    defaultValue: T
  ): T => this.oneOf<T>(
    key, options, defaultValue
  ) || defaultValue

  public toObject = (): Record<string, string> => {
    const object: Record<string, string> = {}
    for (const key of this.searchParams.keys()) object[key] = this.get(key)
    return object
  }

  public toString = (): string => this.searchParams.toString()
}

export default Magnifier