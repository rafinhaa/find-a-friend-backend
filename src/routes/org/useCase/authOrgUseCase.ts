import { UnauthorizedError } from "@/errors/UnauthorizedError";
import { OrgsRepository } from "../repositories/orgRepository";
import { compare } from "bcryptjs";

import type { TAuthenticatedRequest, TOrgDatabaseFields } from "../types";

export class AuthenticateOrgUseCase {
  constructor(private orgsRepository: OrgsRepository) {}

  async execute({
    email,
    password,
  }: TAuthenticatedRequest): Promise<Partial<TOrgDatabaseFields>> {
    const org = await this.orgsRepository.findByEmail({
      email,
    });

    if (!org) throw new UnauthorizedError();

    const doesPasswordMatch = await compare(password, org.password);

    if (!doesPasswordMatch) throw new UnauthorizedError();

    const { password: _, created_at: __, ...orgWithoutFields } = org;

    return orgWithoutFields;
  }
}
