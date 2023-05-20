import { z } from "zod";

const Carry = z.enum(["Small", "Medium", "Big"]);

const EnergyLevel = z.enum(["VeryLow", "Low", "Moderate", "High", "VeryHigh"]);

const LevelOfIndependency = z.enum(["Low", "Medium", "High"]);

const PetPhotos = z.array(
  z.object({
    name: z.string(),
  })
);

const RequirementsAdopted = z.array(
  z.object({
    description: z.string(),
  })
);

export const petDatabaseFields = z.object({
  id: z.string(),
  name: z.string().min(2),
  about: z.string().max(254),
  age: z.number().min(1).max(21),
  carry: Carry,
  energy_level: EnergyLevel,
  level_of_independency: LevelOfIndependency,
  ambiente: z.string().min(2),
  street: z.string().min(2),
  number: z.string().min(1),
  neighborhood: z.string().min(2),
  city: z.string().min(2),
  state: z.string().min(2),
  created_at: z.string(),
  petPhotos: PetPhotos,
  requirementsAdopted: RequirementsAdopted,
  org_id: z.string(),
});

export const petDatabaseFieldsResponse = petDatabaseFields
  .omit({
    requirementsAdopted: true,
    petPhotos: true,
    created_at: true,
  })
  .extend({
    created_at: z.date(),
  });

export const createPetBodySchema = petDatabaseFields
  .omit({
    id: true,
    created_at: true,
    energy_level: true,
    level_of_independency: true,
    org_id: true,
  })
  .extend({
    energyLevel: petDatabaseFields.shape.energy_level,
    independency: petDatabaseFields.shape.level_of_independency,
  });

export const orgIdRequestTokenSchema = z.object({
  orgId: z.string().uuid(),
});

export const getPetParamsSchema = z.object({
  petId: petDatabaseFields.shape.id,
});

export const getSearchPetQuerySchema = z.object({
  city: z.string().min(2),
  carry: Carry.optional(),
  energyLevel: EnergyLevel.optional(),
  independency: LevelOfIndependency.optional(),
  age: z.number().min(1).max(21).optional(),
});
