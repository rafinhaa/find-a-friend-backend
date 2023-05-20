import { PetsRepository } from "../repositories/petRepository";

import type { TSearchPetUseCaseRequest } from "../types";

export class GetSearchPetUseCase {
  constructor(private petsRepository: PetsRepository) {}

  async execute(data: TSearchPetUseCaseRequest) {
    const pets = await this.petsRepository.search(data);

    return pets;
  }
}
