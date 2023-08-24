FROM node:18-alpine as builder
WORKDIR /temp-apps/app

COPY package*.json ./
RUN npm install

COPY ./ ./

RUN npm run build

# prod stage

FROM node:18-alpine
WORKDIR /my-apps/app

COPY package*.json ./
RUN npm install --omit=dev
RUN npm install -g pm2

COPY --from=builder /temp-apps/app/dist/ ./dist

EXPOSE 3001

CMD ["npm","run","start:pm2"]