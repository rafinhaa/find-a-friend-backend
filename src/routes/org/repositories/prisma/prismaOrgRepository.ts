import { prisma } from "@/lib/prisma";

import { OrgsRepository } from "../orgRepository";

import type {
  TAuthenticatedRequest,
  TOrgDatabaseFields,
  TOrgId,
  TOrgUseCaseRequest,
} from "../../types";

export class PrismaOrgsRepository implements OrgsRepository {
  async create(data: TOrgUseCaseRequest): Promise<TOrgDatabaseFields> {
    const org = await prisma.org.create({
      data,
    });

    return org;
  }

  async findByEmail({
    email,
  }: TAuthenticatedRequest): Promise<TOrgDatabaseFields | null> {
    const org = await prisma.org.findUnique({
      where: {
        email,
      },
    });

    return org;
  }

  async findById({ id }: TOrgId): Promise<Partial<TOrgDatabaseFields | null>> {
    const org = await prisma.org.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        responsible: true,
        email: true,
        address: true,
        cep: true,
        whatsapp: true,
      },
    });

    return org;
  }
}
