import "@fastify/jwt";

declare module "@fastify/jwt" {
  interface FastifyJWT {
    payload: undefined;
    user: {
      sub: string;
    };
  }
}
