import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { makeCreatePetUseCase } from "./factories/makeCreatePetUseCase";

export const create = async (request: FastifyRequest, reply: FastifyReply) => {
  const createPetBodySchema = z.object({
    name: z.string().min(2),
    about: z.string().max(254),
    age: z.number().min(1).max(21),
    carry: z.enum(["Small", "Medium", "Big"]),
    energy_level: z.enum(["VeryLow", "Low", "Moderate", "High", "VeryHigh"]),
    level_of_independency: z.enum(["Low", "Medium", "High"]),
    ambiente: z.string().min(2),
    street: z.string().min(2),
    number: z.string().min(1),
    neighborhood: z.string().min(2),
    city: z.string().min(2),
    state: z.string().min(2),
    petPhotos: z.array(
      z.object({
        name: z.string().url(),
      })
    ),
    requirementsAdopted: z.array(
      z.object({
        description: z.string().min(2),
      })
    ),
  });

  const petBodyParsed = createPetBodySchema.parse(request.body);

  const orgIdRequestTokenSchema = z.string().uuid();

  const orgIdRequestTokenParsed = orgIdRequestTokenSchema.parse(
    request.user?.sub
  );

  const createPetUseCase = makeCreatePetUseCase();

  const pet = await createPetUseCase.execute({
    ...petBodyParsed,
    org_id: orgIdRequestTokenParsed,
  });
  return reply.status(201).send({ pet });
};
