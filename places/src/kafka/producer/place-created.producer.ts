import { KafkaBaseProducer } from "./base.producer";
import { PlaceCreatedEvent } from "../events/place-created.event";

export class PlaceCreatedProducer extends KafkaBaseProducer<PlaceCreatedEvent> {
  public topic: string = "place-created";

  // publish method can be overridden here, if needed
}
