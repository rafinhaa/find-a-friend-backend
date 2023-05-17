import { NotFoundError } from "@/errors/NotFoundError";
import { OrgsRepository } from "../repositories/orgRepository";

import type { TOrgDatabaseFields, TOrgId } from "../types";

export class ProfileOrgUseCase {
  constructor(private orgsRepository: OrgsRepository) {}

  async execute({ id }: TOrgId): Promise<Partial<TOrgDatabaseFields>> {
    const org = await this.orgsRepository.findById({
      id,
    });

    if (!org) throw new NotFoundError();

    return org;
  }
}
