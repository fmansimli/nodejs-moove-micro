declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: string;
      KAFKA_URL: string;
    }
  }
}

export {};
