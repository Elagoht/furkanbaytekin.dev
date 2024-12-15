class Message {
  public static format = (
    message: string,
    values?: Record<string, PropertyKey>
  ) => values ? message.replace(
    /{{\s*([^}\s]+)\s*}}/g,
    (_, key) => String(values[key]) || `{{ ${key} }}`
  ) : message

  public static shortenSurname = (
    surname: string
  ) => {
    const [first, ...rest] = surname.split(" ")
    return `${first} ${rest.map(
      name => `${name[0].toUpperCase()}.`
    ).join("")}`
  }

  public static truncate(
    text: string,
    maxLength: number,
    minLength: number = 0,
    expandWith: string = ""
  ): string {
    if (typeof text !== "string") return ""
    const textLength = text.length

    if (maxLength >= textLength && minLength <= textLength)
      return text.trim()

    if (textLength < minLength) {
      const combined = `${text.trim()} ${expandWith.trim()}`
      if (combined.length <= maxLength)
        return `${text} ${expandWith}`.trim()
      return Message.truncate(combined, maxLength)
    }

    return `${text.trim().substring(0, maxLength - 1).trim()}…`
  }
}

export default Message