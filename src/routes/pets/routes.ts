import { FastifyInstance } from "fastify";
import { create } from "./create";
import { get } from "./get";
import { verifyJWT } from "@/middlewares/verifyJwtToken";

export const petRoutes = async (app: FastifyInstance) => {
  app.post(
    "/",
    {
      onRequest: [verifyJWT],
    },
    create
  );
  app.get(
    "/:petId",
    {
      onRequest: [verifyJWT],
    },
    get
  );
};
