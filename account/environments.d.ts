declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: string;
      APP_NAME: string;
      APP_HOST: string;
      PORT: string;
      KAFKA_URL: string;
      POSTGRES_HOST: string;
      POSTGRES_PORT: string;
      POSTGRES_USER: string;
      POSTGRES_PASSWORD: string;
      POSTGRES_DB: string;
      JWT_SECRET: string;
    }
  }
}

export {};
