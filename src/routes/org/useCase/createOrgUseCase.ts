import { OrgsRepository } from "../repositories/orgRepository";
import type { TOrgUseCaseRequest } from "../types";

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
    const org = await this.orgsRepository.create({
      responsible,
      email,
      cep,
      address,
      whatsapp,
      password,
    });

    return { org };
  }
}
