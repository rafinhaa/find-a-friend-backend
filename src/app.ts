import fastify from "fastify";
import { env } from "@/env";
import { BaseError } from "@/errors/baseError";
import { orgRoutes } from "@/routes/org/routes";

import { ZodError } from "zod";

const envToLogger = {
  development: true,
  production: true,
  test: false,
};

export const app = fastify({
  logger: envToLogger[env.NODE_ENV],
});

app.register(orgRoutes, { prefix: "/orgs" });

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
