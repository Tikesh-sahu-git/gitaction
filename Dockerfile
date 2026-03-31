# =========================
# 1. Base
# =========================
FROM node:20-alpine AS base
RUN corepack enable
WORKDIR /app

# =========================
# 2. Dependencies
# =========================
FROM base AS deps
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# =========================
# 3. Builder
# =========================
FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED=1
RUN pnpm build

# =========================
# 4. Runner (Optimized)
# =========================
FROM node:20-alpine AS runner

WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Security: non-root user
RUN addgroup -S nextjs && adduser -S nextjs -G nextjs

# Only copy required files (standalone build)
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

USER nextjs

EXPOSE 3000

CMD ["node", "server.js"]