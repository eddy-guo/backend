const axios = require("axios");
require("dotenv").config();

export default async function handler(req, res) {

    const { data } = await axios.get(`https://api.reservoir.tools/collection/v2?id=${req.query.contractAddress}`);

    res.status(200).send(data)
}