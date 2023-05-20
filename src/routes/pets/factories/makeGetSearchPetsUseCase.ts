import { GetSearchPetUseCase } from "../useCase/getSearchPetUseCase";
import { PrismaPetsRepository } from "../repositories/prisma/prismaPetsRepository";

export const makeGetSearchPetsUseCase = () => {
  return new GetSearchPetUseCase(new PrismaPetsRepository());
};
