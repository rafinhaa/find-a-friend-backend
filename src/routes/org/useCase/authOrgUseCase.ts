import { UnauthorizedError } from "@/errors/UnauthorizedError";
import { OrgsRepository } from "../repositories/orgRepository";

import type { TAuthenticatedRequest } from "../types";

export class AuthenticateOrgUseCase {
  constructor(private orgsRepository: OrgsRepository) {}

  async execute({ email, password }: TAuthenticatedRequest) {
    const org = await this.orgsRepository.findByEmail({
      email,
    });

    if (!org) throw new UnauthorizedError();

    const doesPasswordMatch = password === org.password;

    if (!doesPasswordMatch) throw new UnauthorizedError();

    return { org };
  }
}
