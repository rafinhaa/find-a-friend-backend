import { FastifyInstance } from "fastify";
import { create } from "./create";
import { auth } from "./auth";
import { profile } from "./profile";
import { verifyJWT } from "@/middlewares/verifyJwtToken";
import { refresh } from "./refresh";

export const orgRoutes = async (app: FastifyInstance) => {
  app.post("/", create);
  app.post("/auth", auth);
  app.patch("/token/refresh", refresh);

  app.post(
    "/me",
    {
      onRequest: [verifyJWT],
    },
    profile
  );
};
