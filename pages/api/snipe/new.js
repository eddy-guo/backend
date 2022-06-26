import Queue from "./queue"
import Redis from "ioredis";

export default async function handler(req, res) {
  const REDIS_URL = "redis://default:xaRj78IA1mMLENcsvZyw@containers-us-west-63.railway.app:6137";
  const redis = new Redis(REDIS_URL);

  const key = req.query.contractAddress;
  const body = {
    "contractAddress": req.query.contractAddress,
    "tokenId": req.query.tokenId,
    "price": req.query.price,
  }
  redis.set(key, JSON.stringify(body));

  res.status(200).json(body);
}

