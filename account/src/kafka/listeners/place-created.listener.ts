import { KafkaBaseListener } from "./base.listener";
import { PlaceCreatedEvent } from "../events/place-created.event";
import { Topics } from "../events/topics";

export class PlaceCreatedListener extends KafkaBaseListener<PlaceCreatedEvent> {
  public topic: Topics.PlaceCreated = Topics.PlaceCreated;
  public groupId: string = "account-group";

  // parse or listen methods can be overridden here, if needed
}
