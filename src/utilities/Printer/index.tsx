class Printer {
  public static log = (message: string): void => {
    console.log(Printer.prefix(message, new Date()))
  }

  public static warn = (message: string): void => {
    console.warn(Printer.prefix(message, new Date()))
  }

  public static error = (message: string): void => {
    console.error(Printer.prefix(message, new Date()))
  }

  public static info = (message: string): void => {
    console.info(Printer.prefix(message, new Date()))
  }

  private static prefix = (value: string, date: Date): string => {
    return `[${date.toISOString()}] ${value} ==> `
  }
}

export default Printer