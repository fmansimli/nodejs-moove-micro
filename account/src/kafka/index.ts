import { Kafka } from "kafkajs";

class AppKafka {
  private instance: Kafka;

  get client(): Kafka {
    if (!this.instance) {
      throw new Error("kafka has not been initialized yet.");
    }
    return this.instance;
  }

  constructor() {
    const instance = new Kafka({ clientId: "cfg1", brokers: [process.env.KAFKA_URL!] });
    this.instance = instance;
  }

  async connect(url: string) {
    if (!this.instance) {
      const instance = new Kafka({ clientId: "cfg1", brokers: [url] });
      this.instance = instance;
    }

    const admin = this.instance.admin();
    await admin.connect();
    await admin.disconnect();
    return;
  }
}

export const kafka = new AppKafka();
