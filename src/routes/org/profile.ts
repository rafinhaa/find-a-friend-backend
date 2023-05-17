import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { makeGetOrgProfileUseCase } from "./factories/makeGetOrgProfileUseCase";

export const profile = async (request: FastifyRequest, reply: FastifyReply) => {
  const profileOrgRequestTokenSchema = z.string().uuid();

  const profileOrgRequestTokenParsed = profileOrgRequestTokenSchema.parse(
    request.user?.sub
  );

  const getOrgProfileUseCase = makeGetOrgProfileUseCase();

  const org = await getOrgProfileUseCase.execute({
    id: profileOrgRequestTokenParsed,
  });

  return reply.status(200).send({ org });
};
