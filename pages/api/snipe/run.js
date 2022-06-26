import snipeQueue from "./snipe-queue";

export default async function handler(req, res) {
  await snipeQueue.enqueue(
    "foo",
    {
      repeat: {
        every: 10000,
        times: 100,
      }
    }
  )

  res.status(200).json(JSON.parse('{"status": "success"}'));
}
