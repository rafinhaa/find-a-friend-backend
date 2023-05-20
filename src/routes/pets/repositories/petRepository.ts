import {
  TPetDatabaseFieldsResponse,
  TPetId,
  TPetUseCaseRequest,
  TSearchPetUseCaseRequest,
} from "../types";

export interface PetsRepository {
  create(
    data: TPetUseCaseRequest
  ): Promise<Partial<TPetDatabaseFieldsResponse> | null>;
  findById(data: TPetId): Promise<TPetDatabaseFieldsResponse | null>;
  search(data: TSearchPetUseCaseRequest): Promise<TPetDatabaseFieldsResponse[]>;
}
