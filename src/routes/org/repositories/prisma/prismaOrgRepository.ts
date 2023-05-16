import { prisma } from "@/lib/prisma";

import { OrgsRepository } from "../orgRepository";

import type { TOrgDatabaseFields, TOrgUseCaseRequest } from "../../types";

export class PrismaOrgsRepository implements OrgsRepository {
  async create(data: TOrgUseCaseRequest): Promise<TOrgDatabaseFields> {
    const org = await prisma.org.create({
      data,
    });

    return org;
  }
}
