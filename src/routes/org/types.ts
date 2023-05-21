import { z } from "zod";
import {
  authBodySchema,
  orgDatabaseFields,
  profileOrgRequestTokenSchema,
  orgUseCaseRequest,
} from "./schemas";

export type TOrgDatabaseFields = z.input<typeof orgDatabaseFields>;

export type TOrgUseCaseRequest = z.input<typeof orgUseCaseRequest>;

export type TAuthenticatedRequest = z.input<typeof authBodySchema>;

export type TOrgId = z.input<typeof profileOrgRequestTokenSchema>;

export type TPasswordDependencyCompare = {
  password: string;
  hash: string;
};

export type TPasswordDependencyHash = Omit<
  TPasswordDependencyCompare,
  "hash"
> & {
  salt: number;
};
