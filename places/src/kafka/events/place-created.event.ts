import { Topics } from "./topics";

export interface PlaceCreatedEvent {
  topic: Topics.PlaceCreated;
  data: {
    _id: string;
    name: string;
  };
}
