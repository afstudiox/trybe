FROM node AS builder
WORKDIR /app
COPY . .
RUN npm i && npm run build

FROM node AS runner
WORKDIR /app
ENV PORT=3000
COPY --from=builder /app/dist ./dist
COPY ./package.json .
RUN npm i --production
CMD ["node", "./dist/index.js"]
