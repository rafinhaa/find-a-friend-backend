import fastify from "fastify";
import { env } from "./env";

const envToLogger = {
  development: true,
  production: true,
  test: false,
};

export const app = fastify({
  logger: envToLogger[env.NODE_ENV],
});

app.get("/", async (req, res) => {
  res.send("Hello World!");
});
