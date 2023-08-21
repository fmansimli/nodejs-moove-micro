import type { EachMessagePayload } from "kafkajs";

import { PlaceCreatedEvent } from "../events/place-created.event";
import { PlaceUpdatedEvent } from "../events/place-updated.event";

export function placeCreated(payload: EachMessagePayload, data: PlaceCreatedEvent["data"]) {
  console.log("placeCreated:::", JSON.stringify(data));
}

export function placeUpdated(payload: EachMessagePayload, data: PlaceUpdatedEvent["data"]) {
  console.log("placeUpdated:::", data.name);
}
