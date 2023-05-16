import { FastifyInstance } from "fastify";
import { create } from "./create";
import { auth } from "./auth";

export const orgRoutes = async (app: FastifyInstance) => {
  app.post("/", create);
  app.post("/auth", auth);
};
