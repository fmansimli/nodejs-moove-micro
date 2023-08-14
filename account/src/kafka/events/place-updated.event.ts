import { Topics } from "./topics";

export interface PlaceUpdatedEvent {
  topic: Topics.PlaceCreated;
  data: {
    _id: string;
    name: string;
  };
}
