import {
  TPetDatabaseFieldsResponse,
  TPetId,
  TPetUseCaseRequest,
} from "../types";

export interface PetsRepository {
  create(
    data: TPetUseCaseRequest
  ): Promise<Partial<TPetDatabaseFieldsResponse> | null>;
  findById(data: TPetId): Promise<TPetDatabaseFieldsResponse | null>;
}
