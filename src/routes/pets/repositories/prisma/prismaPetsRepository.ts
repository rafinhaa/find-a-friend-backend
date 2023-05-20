import { prisma } from "@/lib/prisma";

import { PetsRepository } from "../petRepository";

import type {
  TPetDatabaseFieldsResponse,
  TPetId,
  TPetUseCaseRequest,
  TSearchPetUseCaseRequest,
} from "../../types";

export class PrismaPetsRepository implements PetsRepository {
  async create(
    data: TPetUseCaseRequest
  ): Promise<Partial<TPetDatabaseFieldsResponse> | null> {
    const { energyLevel, independency, orgId, ...rest } = data;
    const pet = await prisma.pet.create({
      data: {
        ...rest,
        energy_level: energyLevel,
        level_of_independency: independency,
        org_id: orgId,
        petPhotos: {
          create: data.petPhotos,
        },
        requirementsAdopted: {
          create: data.requirementsAdopted,
        },
      },
    });

    return pet;
  }

  async findById(data: TPetId): Promise<TPetDatabaseFieldsResponse | null> {
    const pet = await prisma.pet.findUnique({
      where: {
        id: data.petId,
      },
      include: {
        petPhotos: true,
        requirementsAdopted: true,
      },
    });

    return pet;
  }

  async search(
    data: TSearchPetUseCaseRequest
  ): Promise<TPetDatabaseFieldsResponse[]> {
    const { independency, energyLevel, ...rest } = data;

    const pet = await prisma.pet.findMany({
      where: {
        ...rest,
        level_of_independency: independency,
        energy_level: energyLevel,
      },
    });

    return pet;
  }
}
