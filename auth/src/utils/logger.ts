export class Logger {
  static log(data: any) {
    console.log("LOG::", data);
  }

  static error(error: any) {
    console.error("ERROR::", error);
  }

  static warn(data: any) {
    console.warn("WARNING::", data);
  }
}
