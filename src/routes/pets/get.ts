import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { makeGetPetUseCase } from "./factories/makeGetPetUseCase";

export const get = async (request: FastifyRequest, reply: FastifyReply) => {
  const getPetParamsSchema = z.object({
    petId: z.string().uuid(),
  });

  const petBodyParsed = getPetParamsSchema.parse(request.params);

  const getPetUseCase = makeGetPetUseCase();

  const pet = await getPetUseCase.execute({ id: petBodyParsed.petId });

  return reply.status(200).send({ pet });
};
