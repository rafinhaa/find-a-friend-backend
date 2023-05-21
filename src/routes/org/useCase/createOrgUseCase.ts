import { OrgsRepository } from "../repositories/orgRepository";

import type { TOrgUseCaseRequest } from "../types";
import { AlreadyExistsError } from "@/errors/AlreadyExists";
import { PasswordDependency } from "../dependencies/passwordDependency";

export class CreateOrgUseCase {
  constructor(
    private orgsRepository: OrgsRepository,
    private passwordDependency: PasswordDependency
  ) {}

  async execute({
    responsible,
    email,
    cep,
    address,
    whatsapp,
    password,
  }: TOrgUseCaseRequest) {
    const alreadyExists = await this.orgsRepository.findByEmail({
      email,
    });

    if (alreadyExists) {
      throw new AlreadyExistsError();
    }

    const passwordHash = await this.passwordDependency.createHash({
      password,
      salt: 10,
    });

    const org = await this.orgsRepository.create({
      responsible,
      email,
      cep,
      address,
      whatsapp,
      password: passwordHash,
    });

    return { org };
  }
}
