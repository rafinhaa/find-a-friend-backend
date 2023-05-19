import { prisma } from "@/lib/prisma";

import { PetsRepository } from "../petRepository";

import type {
  TPetDatabaseFieldsResponse,
  TPetId,
  TPetUseCaseRequest,
} from "../../types";

export class PrismaPetsRepository implements PetsRepository {
  async create(
    data: TPetUseCaseRequest
  ): Promise<Partial<TPetDatabaseFieldsResponse> | null> {
    const pet = await prisma.pet.create({
      data: {
        ...data,
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
        id: data.id,
      },
      include: {
        petPhotos: true,
        requirementsAdopted: true,
      },
    });

    return pet;
  }
}
