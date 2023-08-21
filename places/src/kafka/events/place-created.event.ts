import { Topics } from "./topics";

export interface PlaceCreatedEvent {
  topic: string;
  data: {
    _id: string;
    name: string;
  };
}
