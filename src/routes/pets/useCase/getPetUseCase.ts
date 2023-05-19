import { PetsRepository } from "../repositories/petRepository";
import { NotFoundError } from "@/errors/NotFoundError";

import type { TPetId } from "../types";

export class GetPetUseCase {
  constructor(private petsRepository: PetsRepository) {}

  async execute(data: TPetId) {
    const pet = await this.petsRepository.findById(data);

    if (!pet) {
      throw new NotFoundError("Pet not found");
    }

    return pet;
  }
}
