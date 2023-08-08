import { ObjectId } from "mongodb";
import { mongo } from "../db";

import { IPoint } from "src/interfaces/map";

export class Place {
  public _id: ObjectId;
  public name: string;
  public description: string;
  public location: IPoint;
  public createdAt: Date;
  public updatedAt: Date;
  public deletedAt: Date;

  constructor(attrs: Partial<Place>) {
    Object.assign(this, attrs);
  }

  async save() {
    return mongo.db.collection("places").insertOne(this);
  }

  static exec() {
    return mongo.db.collection("places");
  }
}
