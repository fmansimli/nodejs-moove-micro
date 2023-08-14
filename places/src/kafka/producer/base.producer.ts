import type { Kafka } from "kafkajs";
import { Topics } from "../events/topics";

interface Event {
  topic: Topics.PlaceCreated;
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
      topic: this.topic,
      messages: [
        {
          value: data,
          partition: 0,
          timestamp: new Date().toDateString()
        }
      ]
    });
  }
}
