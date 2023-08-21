import type { Kafka } from "kafkajs";

interface Event {
  topic: string;
  data: any;
}

export abstract class KafkaBaseProducer<T extends Event> {
  abstract topic: T["topic"];
  protected instance: Kafka;

  constructor(instance: Kafka) {
    this.instance = instance;
  }

  async publish(data: T["data"]) {
    const producer = this.instance.producer();
    await producer.connect();

    await producer.send({
      topic: this.topic.toString(),
      messages: [
        {
          value: JSON.stringify(data),
          partition: 0
        }
      ]
    });
  }
}
