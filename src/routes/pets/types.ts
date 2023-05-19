type Carry = "Small" | "Medium" | "Big";

type EnergyLevel = "VeryLow" | "Low" | "Moderate" | "High" | "VeryHigh";

type LevelOfIndependency = "Low" | "Medium" | "High";

export type TPetDatabaseFields = {
  id: string;
  name: string;
  about: string;
  age: number;
  carry: Carry;
  energy_level: EnergyLevel;
  level_of_independency: LevelOfIndependency;
  ambiente: string;
  street: string;
  number: string;
  neighborhood: string;
  city: string;
  state: string;
  created_at: string;
  petPhotos: {
    name: string;
  }[];
  requirementsAdopted: {
    description: string;
  }[];
  org_id: string;
};

export type TPetDatabaseFieldsResponse = Omit<
  TPetDatabaseFields,
  "requirementsAdopted" | "petPhotos" | "created_at"
> & {
  created_at: Date;
};

export type TPetUseCaseRequest = Omit<TPetDatabaseFields, "id" | "created_at">;

export type TPetId = Pick<TPetDatabaseFields, "id">;
