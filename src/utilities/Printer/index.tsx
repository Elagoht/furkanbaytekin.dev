class Printer {
  public static log = (message: string): void => {
    console.log(Printer.prefix("LOG", new Date()) + message)
  }

  public static warn = (message: string): void => {
    console.warn(Printer.prefix("WARN", new Date()) + message)
  }

  public static error = (message: string): void => {
    console.error(Printer.prefix("ERROR", new Date()) + message)
  }

  public static info = (message: string): void => {
    console.info(Printer.prefix("INFO", new Date()) + message)
  }

  private static prefix = (value: string, date: Date): string => {
    return `[${date.toISOString()}] ${value} ==> `
  }
}

export default Printer