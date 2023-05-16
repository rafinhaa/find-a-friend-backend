export type TOrgDatabaseFields = {
  id: string;
  responsible: string;
  email: string;
  cep: string;
  address: string;
  whatsapp: string;
  password: string;
  created_at: Date;
};

export type TOrgUseCaseRequest = Omit<TOrgDatabaseFields, "id" | "created_at">;

export type TAuthenticatedRequest = {
  email: string;
  password: string;
};
