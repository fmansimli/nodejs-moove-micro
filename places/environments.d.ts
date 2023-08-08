declare global {
  namespace NodeJS {
    interface ProcessEnv {
      APP_NAME: string;
      JWT_SECRET: string;
      MONGO_URL: string;
    }
  }
}

export {};
