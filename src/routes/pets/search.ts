import { FastifyReply, FastifyRequest } from "fastify";
import { makeGetSearchPetsUseCase } from "./factories/makeGetSearchPetsUseCase";
import { getSearchPetQuerySchema } from "./schemas";

export const search = async (request: FastifyRequest, reply: FastifyReply) => {
  const getSearchPetQueryParsed = getSearchPetQuerySchema.parse(request.query);

  const searchPetsUseCase = makeGetSearchPetsUseCase();

  const pets = await searchPetsUseCase.execute(getSearchPetQueryParsed);

  return reply.status(200).send({ pets });
};
