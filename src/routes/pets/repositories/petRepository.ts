import { TPetDatabaseFieldsResponse, TPetUseCaseRequest } from "../types";

export interface PetsRepository {
  create(
    data: TPetUseCaseRequest
  ): Promise<Partial<TPetDatabaseFieldsResponse> | null>;
}
