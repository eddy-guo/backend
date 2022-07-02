import { Queue } from "quirrel/next"
import handler, { checkCollections } from "./check";

const REDIS_URL = "redis://default:xaRj78IA1mMLENcsvZyw@containers-us-west-63.railway.app:6137";

export default Queue(
  "api/snipe/snipe-queue",
  async (_id) => {
    console.log("refreshing");
    checkCollections();
  }
)

