import { MongoClient } from "mongodb";

class AppMongo {
  private client: MongoClient;

  get db() {
    if (!this.client) {
      throw new Error("mongo client has not beeen initialized yet");
    }
    return this.client.db("moovedb");
  }

  async connect(url: string) {
    const client = new MongoClient(url);
    this.client = client;

    return this.client.connect();
  }
}

export const mongo = new AppMongo();
