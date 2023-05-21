import { UnauthorizedError } from "@/errors/UnauthorizedError";
import { OrgsRepository } from "../repositories/orgRepository";
import { PasswordDependency } from "../dependencies/passwordDependency";

import type { TAuthenticatedRequest, TOrgDatabaseFields } from "../types";

export class AuthenticateOrgUseCase {
  constructor(
    private orgsRepository: OrgsRepository,
    private passwordDependency: PasswordDependency
  ) {}

  async execute({
    email,
    password,
  }: TAuthenticatedRequest): Promise<Partial<TOrgDatabaseFields>> {
    const org = await this.orgsRepository.findByEmail({
      email,
    });

    if (!org) throw new UnauthorizedError();

    const doesPasswordMatch = await this.passwordDependency.comparePassword({
      password,
      hash: org.password,
    });

    if (!doesPasswordMatch) throw new UnauthorizedError();

    const { password: _, created_at: __, ...orgWithoutFields } = org;

    return orgWithoutFields;
  }
}
