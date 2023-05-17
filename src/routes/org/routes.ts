import { FastifyInstance } from "fastify";
import { create } from "./create";
import { auth } from "./auth";
import { profile } from "./profile";

export const orgRoutes = async (app: FastifyInstance) => {
  app.post("/", create);
  app.post("/auth", auth);
  app.post("/me", profile);
};
