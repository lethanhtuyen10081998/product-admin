FROM node:20.13.1  as dependencies
WORKDIR /nextjs-app
COPY package.json package-lock.json ./
RUN yarn install -f

FROM node:20.13.1 as builder
WORKDIR /nextjs-app
COPY . .
COPY --from=dependencies /nextjs-app/node_modules ./node_modules
RUN yarn build:prod

# FROM node:14.17.6-alpine as runner
# WORKDIR /nextjs-app
# ENV NODE_ENV production
# If you are using a custom next.config.js file, uncomment this line.
# COPY --from=builder /nextjs-app/next.config.js ./
# COPY --from=builder /nextjs-app/public ./public
# COPY --from=builder /nextjs-app/.next ./.next
# COPY --from=builder /nextjs-app/node_modules ./node_modules
# COPY --from=builder /nextjs-app/package.json ./package.json
# COPY --from=builder /nextjs-app/pages ./pages

EXPOSE 3001
CMD ["yarn", "start"]