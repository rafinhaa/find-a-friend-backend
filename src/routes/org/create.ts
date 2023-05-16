import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { makeCreateOrgUseCase } from "./factories/makeCreateOrgUseCase";

export const create = async (request: FastifyRequest, reply: FastifyReply) => {
  const createOrgBodySchema = z.object({
    responsible: z.string().min(2),
    email: z.string().email(),
    cep: z.string().length(8),
    address: z.string().min(2),
    whatsapp: z.string().refine(
      (whatsapp) => {
        return /^[0-9]{2}[0-9]{9}$/.test(whatsapp);
      },
      {
        message: "Format invalid, the pattern is XX XXXX-XXXX",
      }
    ),
    password: z.string().min(8),
  });

  const orgBodyParsed = createOrgBodySchema.parse(request.body);

  const createOrgUseCase = makeCreateOrgUseCase();

  await createOrgUseCase.execute(orgBodyParsed);
  return reply.status(201).send();
};
