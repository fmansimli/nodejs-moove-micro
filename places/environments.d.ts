declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: string;
      APP_NAME: string;
      APP_HOST: string;
      MONGO_HOST: string;
      MONGODB_PORT: string;
      MONGO_DB: string;
      MONGO_USER: string;
      MONGO_PASSWORD: string;
      MONGO_URL: string;
      KAFKA_URL: string;
      JWT_SECRET: string;
    }
  }
}

export {};
