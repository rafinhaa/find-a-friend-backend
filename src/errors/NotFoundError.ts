import { BaseError } from "./baseError";

export class NotFoundError extends BaseError {
  constructor(message?: string) {
    super(message ?? "Resource not Found", 404, "Not Found");
  }
}
