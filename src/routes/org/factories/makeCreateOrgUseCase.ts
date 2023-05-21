import { PasswordBcrypt } from "../dependencies/password/bcryptDependency";
import { PrismaOrgsRepository } from "../repositories/prisma/prismaOrgRepository";
import { CreateOrgUseCase } from "../useCase/createOrgUseCase";

export const makeCreateOrgUseCase = () => {
  return new CreateOrgUseCase(new PrismaOrgsRepository(), new PasswordBcrypt());
};
