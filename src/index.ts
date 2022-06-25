export * from "./Conversation";
import { RedisClientType } from "@redis/client";
import { createClient, RedisDefaultModules } from "redis";

export default class Cache {
  private static instance: Cache;
  private isReady: boolean;
  private client: RedisClientType<RedisDefaultModules>;
  private constructor() {}
  public async init(): Promise<void> {
    if (!this.isReady) {
      if (!this.client) {
        this.client =
          process.env.environment === "DEV"
            ? createClient()
            : createClient({
                url: `redis://${process.env.REDIS_URL}:${process.env.REDIS_PORT}`,
                username: process.env.REDIS_USERNAME,
                password: process.env.REDIS_PASSWORD,
              });
      }
      await this.client.connect();
      this.client.on("ready", () => {
        this.isReady = true;
      });
    }
  }
  public static getInstance(): Cache {
    if (!Cache.instance) {
      Cache.instance = new Cache();
    }
    return Cache.instance;
  }
  public getCache() {
    return this.client;
  }
}
