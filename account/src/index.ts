import http from "http";
import app from "./app";

import { MikroORM } from "@mikro-orm/core";
import { AppDi } from "./ioc/di";
import { Logger } from "./utils/logger";
import { AppConfig } from "./config";
import { kafka } from "./kafka";

import { PlaceCreatedListener } from "./kafka/listeners/place-created.listener";

AppConfig.init();

const httpServer = http.createServer(app);

const POSTGRES_HOST = process.env.POSTGRES_HOST;
const POSTGRES_PORT = process.env.POSTGRES_PORT;
const POSTGRES_USER = process.env.POSTGRES_USER;
const POSTGRES_PASSWORD = process.env.POSTGRES_PASSWORD;

const KAFKA_URL = process.env.KAFKA_URL;
const JWT_SECRET = process.env.JWT_SECRET;

const PORT = process.env.PORT || 3002;

if (!KAFKA_URL) {
  throw new Error("KAFKA_URL must be defined.");
}
if (!POSTGRES_HOST) {
  throw new Error("POSTGRES_HOST must be defined.");
}
if (!POSTGRES_PORT) {
  throw new Error("POSTGRES_PORT must be defined.");
}
if (!POSTGRES_USER) {
  throw new Error("POSTGRES_USER must be defined.");
}
if (!POSTGRES_PASSWORD) {
  throw new Error("POSTGRES_PASSWORD must be defined.");
}
if (!JWT_SECRET) {
  throw new Error("JWT_SECRET must be defined.");
}

async function bootstrap() {
  try {
    const orm = await MikroORM.init();
    AppDi.init(orm);

    const migrator = orm.getMigrator();
    await migrator.up();

    await kafka.connect(KAFKA_URL);

    httpServer.listen(PORT, () => {
      Logger.log(`Listening on port ${PORT} , (${process.env.APP_NAME})`);
    });
  } catch (error) {
    Logger.error(error);
  }
}

bootstrap();
