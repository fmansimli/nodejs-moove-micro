import http from "http";
import app from "./app";

import { Logger } from "./utils/logger";
import { AppConfig } from "./config";
import { kafka } from "./kafka";

AppConfig.init();

const httpServer = http.createServer(app);

const KAFKA_URL = process.env.KAFKA_URL;
const PORT = process.env.PORT || 3002;

if (!KAFKA_URL) {
  throw new Error("KAFKA_URL must be defined.");
}

async function bootstrap() {
  try {
    //await kafka.connect(KAFKA_URL);

    httpServer.listen(PORT, () => {
      Logger.log(`Listening on port ${PORT} , (${process.env.APP_NAME})`);
    });
  } catch (error) {
    Logger.error(error);
  }
}

bootstrap();
