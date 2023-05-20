import { FastifyReply, FastifyRequest } from "fastify";
import { makeAuthOrgUseCase } from "./factories/makeAuthOrgUseCase";
import { authBodySchema } from "./schemas";

export const auth = async (request: FastifyRequest, reply: FastifyReply) => {
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

  const refreshToken = await reply.jwtSign(
    {},
    {
      sign: {
        sub: org.id,
        expiresIn: "7d",
      },
    }
  );

  return reply
    .setCookie("refreshToken", refreshToken, {
      path: "/",
      secure: true,
      sameSite: true,
      httpOnly: true,
      signed: true,
    })
    .status(200)
    .send({ org, token });
};
