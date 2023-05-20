import { FastifyReply, FastifyRequest } from "fastify";
import { makeCreatePetUseCase } from "./factories/makeCreatePetUseCase";
import { createPetBodySchema, orgIdRequestTokenSchema } from "./schemas";

export const create = async (request: FastifyRequest, reply: FastifyReply) => {
  const petBodyParsed = createPetBodySchema.parse(request.body);

  const orgIdRequestTokenParsed = orgIdRequestTokenSchema.parse({
    orgId: request.user?.sub,
  });

  const createPetUseCase = makeCreatePetUseCase();

  const pet = await createPetUseCase.execute({
    ...petBodyParsed,
    orgId: orgIdRequestTokenParsed.orgId,
  });
  return reply.status(201).send({ pet });
};
