import { FastifyReply, FastifyRequest } from "fastify";
import { makeGetOrgProfileUseCase } from "./factories/makeGetOrgProfileUseCase";
import { profileOrgRequestTokenSchema } from "./schemas";

export const profile = async (request: FastifyRequest, reply: FastifyReply) => {
  const profileOrgRequestTokenParsed = profileOrgRequestTokenSchema.parse({
    id: request.user?.sub,
  });

  const getOrgProfileUseCase = makeGetOrgProfileUseCase();

  const org = await getOrgProfileUseCase.execute(profileOrgRequestTokenParsed);

  return reply.status(200).send({ org });
};
