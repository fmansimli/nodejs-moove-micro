import http from "http";
import app from "./app";

import { Logger } from "./utils/logger";
import { AppConfig } from "./config";
import { kafka } from "./kafka";
import { mongo } from "./db";

AppConfig.init();

const httpServer = http.createServer(app);

const PORT = process.env.PORT || 3003;
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

async function bootstrap() {
  try {
    await mongo.connect(`mongodb://${MONGO_HOST}:${MONGO_PORT}/${MONGO_DB}`);
    kafka.connect(KAFKA_URL);

    httpServer.listen(PORT, () => {
      Logger.log(`Listening on ${PORT}, (${process.env.APP_NAME})`);
    });
  } catch (error) {
    Logger.error(error);
  }
}

bootstrap();
