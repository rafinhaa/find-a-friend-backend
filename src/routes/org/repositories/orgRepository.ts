import {
  TOrgDatabaseFields,
  TOrgUseCaseRequest,
  TAuthenticatedRequest,
  TOrgId,
} from "../types";

export interface OrgsRepository {
  create(data: TOrgUseCaseRequest): Promise<TOrgDatabaseFields>;
  findByEmail(
    data: Pick<TAuthenticatedRequest, "email">
  ): Promise<TOrgDatabaseFields | null>;
  findById(data: TOrgId): Promise<Partial<TOrgDatabaseFields | null>>;
}
