import { UnauthorizedError } from "@/errors/UnauthorizedError";
import { FastifyReply, FastifyRequest } from "fastify";

export const verifyJWT = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    await request.jwtVerify();
  } catch (error) {
    throw new UnauthorizedError();
  }
};
