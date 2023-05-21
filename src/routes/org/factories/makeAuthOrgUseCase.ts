import { PasswordBcrypt } from "../dependencies/password/bcryptDependency";
import { PrismaOrgsRepository } from "../repositories/prisma/prismaOrgRepository";
import { AuthenticateOrgUseCase } from "../useCase/authOrgUseCase";

export const makeAuthOrgUseCase = () => {
  return new AuthenticateOrgUseCase(
    new PrismaOrgsRepository(),
    new PasswordBcrypt()
  );
};
