import { OrgsRepository } from "../repositories/orgRepository";
import { hash } from "bcryptjs";

import type { TOrgUseCaseRequest } from "../types";
import { AlreadyExistsError } from "@/errors/AlreadyExists";

export class CreateOrgUseCase {
  constructor(private orgsRepository: OrgsRepository) {}

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

    const passwordHash = await hash(password, 10);

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
