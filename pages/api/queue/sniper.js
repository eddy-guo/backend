import { Queue } from "quirrel/next"

export default Queue(
  "api/queue/sniper",
  async job => {
    // need to pull collections to load continuously
    await console.log("execute job");
  }
)

