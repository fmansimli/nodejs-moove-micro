import { CustomError, IError } from "./custom-error";

export class NotFoundError extends CustomError {
  public httpCode = 404;

  constructor(public message: string) {
    super(message);
  }

  serialize() {
    return {
      message: this.message,
      httpCode: this.httpCode
    };
  }
}
