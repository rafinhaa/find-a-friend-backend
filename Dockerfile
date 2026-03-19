FROM node:20-alpine AS builder

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY tsconfig.json tsup.config.ts ./
COPY src ./src
COPY prisma ./prisma

RUN npx prisma generate

RUN yarn build

RUN yarn install --frozen-lockfile --production && yarn cache clean


FROM node:20-alpine AS runner

WORKDIR /app
ENV NODE_ENV=production

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./prisma


EXPOSE 3000

CMD ["sh", "-c", "npx prisma migrate deploy && node dist/server.js"]