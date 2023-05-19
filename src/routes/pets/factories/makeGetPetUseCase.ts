import { GetPetUseCase } from "../useCase/getPetUseCase";
import { PrismaPetsRepository } from "../repositories/prisma/prismaPetsRepository";

export const makeGetPetUseCase = () => {
  return new GetPetUseCase(new PrismaPetsRepository());
};
