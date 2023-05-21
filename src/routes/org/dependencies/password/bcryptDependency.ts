import {
  TPasswordDependencyCompare,
  TPasswordDependencyHash,
} from "../../types";
import { PasswordDependency } from "../passwordDependency";
import { compare, hash } from "bcryptjs";

export class PasswordBcrypt implements PasswordDependency {
  async comparePassword({
    password,
    hash,
  }: TPasswordDependencyCompare): Promise<boolean> {
    return await compare(password, hash);
  }

  async createHash({
    password,
    salt,
  }: TPasswordDependencyHash): Promise<string> {
    return await hash(password, salt);
  }
}
