import { prisma } from "@/lib/prisma";

import { OrgsRepository } from "../orgRepository";

import type {
  TAuthenticatedRequest,
  TOrgDatabaseFields,
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
}
