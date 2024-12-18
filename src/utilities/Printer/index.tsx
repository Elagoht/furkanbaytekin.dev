import chalk from "chalk"

class Printer {
  public static log = (message: string): void => {
    console.log(chalk.green(Printer.prefix("LOG", new Date())) + message)
  }

  public static warn = (message: string): void => {
    console.warn(chalk.yellow(Printer.prefix("WARN", new Date())) + message)
  }

  public static error = (message: string): void => {
    console.error(chalk.red(Printer.prefix("ERROR", new Date())) + message)
  }

  public static info = (message: string): void => {
    console.info(chalk.blue(Printer.prefix("INFO", new Date())) + message)
  }

  private static prefix = (value: string, date: Date): string => {
    return `[${date.toISOString()}] ${value} ==> `
  }
}

export default Printer