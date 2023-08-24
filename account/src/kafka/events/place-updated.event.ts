import { Topics } from "./topics";

export interface PlaceUpdatedEvent {
  topic: Topics.PlaceUpdated;
  data: {
    _id: string;
    name: string;
  };
}
