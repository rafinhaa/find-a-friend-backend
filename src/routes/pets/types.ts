import { z } from "zod";
import {
  getSearchPetQuerySchema,
  getPetParamsSchema,
  createPetBodySchema,
  petDatabaseFields,
  petDatabaseFieldsResponse,
  orgIdRequestTokenSchema,
} from "./schemas";

export type TPetDatabaseFields = z.input<typeof petDatabaseFields>;

export type TPetDatabaseFieldsResponse = z.input<
  typeof petDatabaseFieldsResponse
>;

export type TPetUseCaseRequest = z.input<typeof createPetBodySchema> &
  z.infer<typeof orgIdRequestTokenSchema>;

export type TPetId = z.input<typeof getPetParamsSchema>;

export type TSearchPetUseCaseRequest = z.input<typeof getSearchPetQuerySchema>;
