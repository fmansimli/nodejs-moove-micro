import { KafkaBaseProducer } from "./base.producer";
import { PlaceCreatedEvent } from "../events/place-created.event";
import { Topics } from "../events/topics";

export class PlaceCreatedProducer extends KafkaBaseProducer<PlaceCreatedEvent> {
  public topic: Topics.PlaceCreated;

  // publish method can be overridden here, if needed
}
