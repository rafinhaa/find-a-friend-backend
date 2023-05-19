import fastify from "fastify";
import fastifyJwt from "@fastify/jwt";
import { env } from "@/env";
import { BaseError } from "@/errors/baseError";
import { orgRoutes } from "@/routes/org/routes";
import { petRoutes } from "./routes/pets/routes";

import { ZodError } from "zod";

const envToLogger = {
  development: true,
  production: true,
  test: false,
};

export const app = fastify({
  logger: envToLogger[env.NODE_ENV],
});

app.register(fastifyJwt, {
  secret: env.JWT_SECRET,
});

app.register(orgRoutes, { prefix: "/orgs" });
app.register(petRoutes, { prefix: "/pets" });

app.setErrorHandler((error, _, reply) => {
  if (env.NODE_ENV !== "production") console.error(error);

  if (error instanceof ZodError)
    return reply.status(400).send({
      statusCode: 400,
      error: "Validation error",
      message: error.format(),
    });

  if (error instanceof BaseError)
    return reply.status(error.statusCode).send({
      statusCode: error.statusCode,
      error: error.error,
      message: error.message,
    });

  reply.status(500).send({
    statusCode: 500,
    error: "Internal Server Error",
    message: "Internal Server Error",
  });
});
