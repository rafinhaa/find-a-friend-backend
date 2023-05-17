import { PrismaOrgsRepository } from "../repositories/prisma/prismaOrgRepository";
import { ProfileOrgUseCase } from "../useCase/profileOrgUseCase";

export const makeGetOrgProfileUseCase = () => {
  return new ProfileOrgUseCase(new PrismaOrgsRepository());
};
