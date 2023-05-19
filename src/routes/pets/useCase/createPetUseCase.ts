import { PetsRepository } from "../repositories/petRepository";
import type { TPetUseCaseRequest } from "../types";
import { OrgsRepository } from "@/routes/org/repositories/orgRepository";
import { NotFoundError } from "@/errors/NotFoundError";

export class CreatePetUseCase {
  constructor(
    private orgsRepository: OrgsRepository,
    private petsRepository: PetsRepository
  ) {}

  async execute(data: TPetUseCaseRequest) {
    const org = await this.orgsRepository.findById({
      id: data.org_id,
    });

    if (!org) {
      throw new NotFoundError("Organization not found");
    }

    const pet = await this.petsRepository.create(data);

    return pet;
  }
}
