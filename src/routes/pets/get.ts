import { FastifyReply, FastifyRequest } from "fastify";
import { makeGetPetUseCase } from "./factories/makeGetPetUseCase";
import { getPetParamsSchema } from "./schemas";

export const get = async (request: FastifyRequest, reply: FastifyReply) => {
  const petBodyParsed = getPetParamsSchema.parse(request.params);

  const getPetUseCase = makeGetPetUseCase();

  const pet = await getPetUseCase.execute(petBodyParsed);

  return reply.status(200).send({ pet });
};
