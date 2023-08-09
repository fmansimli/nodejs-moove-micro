import { Kafka } from "kafkajs";

class AppKafka {
  private instance: Kafka;

  constructor() {
    const instance = new Kafka({ brokers: [process.env.KAFKA_URL], clientId: "cfg1" });
    this.instance = instance;
  }

  get client(): Kafka {
    if (!this.instance) {
      throw new Error("Kafka has not been initialized");
    }
    return this.instance;
  }

  async connect(url?: string) {
    if (!this.instance) {
      const instance = new Kafka({ brokers: [url], clientId: "cfg1" });
      this.instance = instance;
    }

    const admin = this.instance.admin();
    await admin.connect();

    await admin.createTopics({
      topics: [
        { topic: "logs", numPartitions: 1 },
        { topic: "places", numPartitions: 1 }
      ]
    });

    await admin.disconnect();
  }
}

export const kafka = new AppKafka();
