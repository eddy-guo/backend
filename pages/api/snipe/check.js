import Queue from "../queue/sniper"

export default async function handler(req, res) {

  await Queue.enqueue(

    // some job to be enqueued,
    { delay: "5s" }
  )

}

