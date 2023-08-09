import http from "http";
import app from "./app";

import { Logger } from "./utils/logger";
import { AppConfig } from "./config";
import { kafka } from "./kafka";
import { mongo } from "./db";

AppConfig.init();

const httpServer = http.createServer(app);

const PORT = process.env.PORT || 3003;
const MONGO_URL = process.env.MONGO_URL;
const KAFKA_URL = process.env.KAFKA_URL;
const JWT_SECRET = process.env.JWT_SECRET;

if (!MONGO_URL) {
  throw new Error("MONGO_URL must be defined");
}
if (!KAFKA_URL) {
  throw new Error("KAFKA_URL must be defined");
}
if (!JWT_SECRET) {
  throw new Error("JWT_SECRET must be defined");
}

async function bootstrap() {
  try {
    await mongo.connect(MONGO_URL);
    await kafka.connect(KAFKA_URL);

    const admin = kafka.client.admin();

    const topics = await admin.listTopics();
    console.log(topics);

    httpServer.listen(PORT, () => {
      Logger.log(`Listening on ${PORT}, (${process.env.APP_NAME})`);
    });
  } catch (error) {
    Logger.error(error);
  }
}

bootstrap();
