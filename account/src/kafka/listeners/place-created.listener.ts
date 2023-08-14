import { KafkaBaseListener } from "./base.listener";
import { PlaceCreatedEvent } from "../events/place-created";
import { Topics } from "../events/topics";

export class PlaceCreatedListener extends KafkaBaseListener<PlaceCreatedEvent> {
  public topic: Topics.PlaceCreated = Topics.PlaceCreated;
  public groupId: string = "account-group";
}
