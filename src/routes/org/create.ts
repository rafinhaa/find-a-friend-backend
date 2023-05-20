import { FastifyReply, FastifyRequest } from "fastify";
import { makeCreateOrgUseCase } from "./factories/makeCreateOrgUseCase";
import { orgUseCaseRequest } from "./schemas";

export const create = async (request: FastifyRequest, reply: FastifyReply) => {
  const orgBodyParsed = orgUseCaseRequest.parse(request.body);

  const createOrgUseCase = makeCreateOrgUseCase();

  await createOrgUseCase.execute(orgBodyParsed);
  return reply.status(201).send();
};
