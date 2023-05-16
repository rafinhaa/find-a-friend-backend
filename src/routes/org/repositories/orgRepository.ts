import {
  TOrgDatabaseFields,
  TOrgUseCaseRequest,
  TAuthenticatedRequest,
} from "../types";

export interface OrgsRepository {
  create(data: TOrgUseCaseRequest): Promise<TOrgDatabaseFields>;
  findByEmail(
    data: Pick<TAuthenticatedRequest, "email">
  ): Promise<TOrgDatabaseFields | null>;
}
