import { TOrgDatabaseFields, TOrgUseCaseRequest } from "../types";

export interface OrgsRepository {
  create(data: TOrgUseCaseRequest): Promise<TOrgDatabaseFields>;
}
