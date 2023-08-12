declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: string;
      APP_NAME: string;
      APP_HOST: string;
      MONGO_HOST: string;
      MONGO_PORT: string;
      MONGO_DATABASE: string;
      MONGO_USER: string;
      MONGO_PASSWORD: string;
      MONGO_URL: string;
      KAFKA_URL: string;
      JWT_SECRET: string;
    }
  }
}

export {};
