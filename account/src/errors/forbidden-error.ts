import { CustomError, IError } from "./custom-error";

export class ForbiddenError extends CustomError {
  public httpCode = 403;

  constructor(public message: string) {
    super(message);
    Object.setPrototypeOf(this, ForbiddenError.prototype);
  }

  serialize(): IError {
    return {
      message: this.message,
      httpCode: this.httpCode
    };
  }
}
