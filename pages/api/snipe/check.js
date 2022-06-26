import Redis from "ioredis";
import axios from "axios";

export async function checkCollections() {
  const REDIS_URL = "redis://default:xaRj78IA1mMLENcsvZyw@containers-us-west-63.railway.app:6137";
  const redis = new Redis(REDIS_URL);

  const keys = await redis.keys('*');

  const snipableCollections = [];

  for (const key of keys) {
    const oldData = await redis.get(key);
    const oldJson = JSON.parse(oldData);
    const newJson = await axios.get(`https://api.reservoir.tools/collection/v2?id=${key}`);

    if (newJson.price < oldJson.price) {
      snipableCollections.push(newJson);
      const body = {
        "contractAddress": newJson.contract,
        "tokenId": newJson.id,
        "price": newJson.price,
      }
      redis.set(key, JSON.stringify(body))
    }
  }

  return snipableCollections;
}

export default async function handler(req, res) {
  const collections = await checkCollections();
  // redis.set(key, JSON.stringify(body));
  res.status(200).json(collections);
}
