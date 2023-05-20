import { FastifyInstance } from "fastify";
import { create } from "./create";
import { get } from "./get";
import { verifyJWT } from "@/middlewares/verifyJwtToken";
import { search } from "./search";

export const petRoutes = async (app: FastifyInstance) => {
  app.post(
    "/",
    {
      onRequest: [verifyJWT],
    },
    create
  );
  app.get("/:petId", get);

  app.get("/", search);
};
