import { PrismaOrgsRepository } from "@/routes/org/repositories/prisma/prismaOrgRepository";
import { CreatePetUseCase } from "../useCase/createPetUseCase";
import { PrismaPetsRepository } from "../repositories/prisma/prismaPetsRepository";

export const makeCreatePetUseCase = () => {
  return new CreatePetUseCase(
    new PrismaOrgsRepository(),
    new PrismaPetsRepository()
  );
};
