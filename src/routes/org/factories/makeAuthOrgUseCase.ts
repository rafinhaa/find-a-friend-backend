import { PrismaOrgsRepository } from "../repositories/prisma/prismaOrgRepository";
import { AuthenticateOrgUseCase } from "../useCase/authOrgUseCase";

export const makeAuthOrgUseCase = () => {
  return new AuthenticateOrgUseCase(new PrismaOrgsRepository());
};
