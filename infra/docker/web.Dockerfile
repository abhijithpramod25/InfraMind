FROM node:22-alpine

WORKDIR /workspace

RUN corepack enable

COPY package.json pnpm-workspace.yaml ./
COPY apps/web/package.json ./apps/web/package.json
COPY packages ./packages

RUN pnpm install --frozen-lockfile=false

COPY apps/web ./apps/web

EXPOSE 3000

CMD ["pnpm", "--filter", "@inframind/web", "dev", "--hostname", "0.0.0.0"]
