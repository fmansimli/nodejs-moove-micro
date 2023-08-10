import type { Kafka, EachMessagePayload, Message } from "kafkajs";

interface IEvent {
  topic: string;
  data: any;
}

export abstract class KafkaBaseListener<T extends IEvent> {
  protected instance: Kafka;
  abstract groupId: string;
  abstract topic: T["topic"];

  constructor(instance: Kafka) {
    this.instance = instance;
  }

  async listen(callback: (payload: EachMessagePayload, data: T["data"]) => void) {
    const consumer = this.instance.consumer({
      allowAutoTopicCreation: true,
      groupId: this.groupId
    });

    await consumer.connect();
    await consumer.subscribe({
      fromBeginning: true,
      topic: this.topic
    });

    await consumer.run({
      eachMessage: async (payload) => {
        const _data = this.parse(payload.message);
        callback(payload, _data);
      }
    });
  }

  parse(message: Message) {
    if (message.value) {
      return JSON.parse(message.value.toString("utf8"));
    }
    return null;
  }
}
