import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { makeAuthOrgUseCase } from "./factories/makeAuthOrgUseCase";

export const auth = async (request: FastifyRequest, reply: FastifyReply) => {
  const authBodySchema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
  });

  const authBodyParsed = authBodySchema.parse(request.body);

  const authUseCase = makeAuthOrgUseCase();

  const org = await authUseCase.execute(authBodyParsed);

  const token = await reply.jwtSign(
    {},
    {
      sign: {
        sub: org.id,
      },
    }
  );

  return reply.status(200).send({ org, token });
};
