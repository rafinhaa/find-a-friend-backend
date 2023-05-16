import { FastifyInstance } from "fastify";
import { create } from "./create";

export const orgRoutes = async (app: FastifyInstance) => {
  app.post("/", create);
};
