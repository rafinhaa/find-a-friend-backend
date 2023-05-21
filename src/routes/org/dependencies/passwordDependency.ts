import { TPasswordDependencyCompare, TPasswordDependencyHash } from "../types";

export interface PasswordDependency {
  comparePassword({
    password,
    hash,
  }: TPasswordDependencyCompare): Promise<boolean>;

  createHash({ password, salt }: TPasswordDependencyHash): Promise<string>;
}
