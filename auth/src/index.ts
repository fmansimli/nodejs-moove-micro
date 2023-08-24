import http from "http";
import app from "./app";

import { Logger } from "./utils/logger";

const PORT = process.env.PORT || 3001;
const MONGO_HOST = process.env.MONGO_HOST;
const MONGO_PORT = process.env.MONGO_PORT;
const MONGO_USER = process.env.MONGO_USER;
const MONGO_PASSWORD = process.env.MONGO_PASSWORD;
const MONGO_DB = process.env.MONGO_DATABASE;

const KAFKA_URL = process.env.KAFKA_URL;
const JWT_SECRET = process.env.JWT_SECRET;

if (!MONGO_HOST) {
  throw new Error("MONGO_HOST must be defined");
}
if (!MONGO_PORT) {
  throw new Error("MONGO_PORT must be defined");
}
if (!MONGO_USER) {
  throw new Error("MONGO_USER must be defined");
}
if (!MONGO_PASSWORD) {
  throw new Error("MONGO_PASSWORD must be defined");
}
if (!MONGO_DB) {
  throw new Error("MONGO_DB must be defined");
}
if (!KAFKA_URL) {
  throw new Error("KAFKA_URL must be defined");
}
if (!JWT_SECRET) {
  throw new Error("JWT_SECRET must be defined");
}

const httpServer = http.createServer(app);

async function bootstrap() {
  try {
    httpServer.listen(PORT, () => {
      Logger.log(`** listening on port ${PORT} (${process.env.APP_NAME})`);
    });
  } catch (error) {
    Logger.error(error);
  }
}

bootstrap();
