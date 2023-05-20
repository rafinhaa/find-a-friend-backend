import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { makeGetSearchPetsUseCase } from "./factories/makeGetSearchPetsUseCase";
export const search = async (request: FastifyRequest, reply: FastifyReply) => {
  console.log(request.query);

  const getSearchPetQuerySchema = z.object({
    city: z.string().min(2),
    age: z.number().min(1).max(21).optional(),
    carry: z.enum(["Small", "Medium", "Big"]).optional(),
    energy_level: z
      .enum(["VeryLow", "Low", "Moderate", "High", "VeryHigh"])
      .optional(),
    level_of_independency: z.enum(["Low", "Medium", "High"]).optional(),
  });

  const getSearchPetQueryParsed = getSearchPetQuerySchema.parse(request.query);

  const searchPetsUseCase = makeGetSearchPetsUseCase();

  const pets = await searchPetsUseCase.execute(getSearchPetQueryParsed);

  return reply.status(200).send({ pets });
};
