import { BaseError } from "./baseError";

export class AlreadyExistsError extends BaseError {
  constructor(message?: string) {
    super(message ?? "Already exists", 409, "Conflict");
  }
}
