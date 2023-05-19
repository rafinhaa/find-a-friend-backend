import { FastifyInstance } from "fastify";
import { create } from "./create";
import { verifyJWT } from "@/middlewares/verifyJwtToken";

export const petRoutes = async (app: FastifyInstance) => {
  app.post(
    "/",
    {
      onRequest: [verifyJWT],
    },
    create
  );
};
