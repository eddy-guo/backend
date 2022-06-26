import Queue from "../queue/sniper"
import Redis from "ioredis";

export default async function handler(req, res) {
  const REDIS_URL = "redis://default:xaRj78IA1mMLENcsvZyw@containers-us-west-63.railway.app:6137";
  const redis = new Redis(REDIS_URL);

  const keys = await redis.keys('*');

  let collections = [];
  for (const key of keys) {
    const data = await redis.get(key);
    let obj = JSON.parse(data)
    obj["key"] = key;
    collections.push(obj);
  }

  // redis.set(key, JSON.stringify(body));
  console.log(collections)
  res.status(200).json(collections);
}
