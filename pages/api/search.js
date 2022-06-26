const axios = require("axios");
require("dotenv").config();

export default async function handler(req, res) {
    //axios.defaults.headers.common["x-api-key"] = 'b8644c0e-9e85-4fdb-a0d7-55f7f8672cab';
    
    // const tokenAddress = '0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D';
    // const { data } = await axios.get(
    //     `https://api.reservoir.tools/collection/v2?id=${tokenAddress}`
    // );

    const query = req.query;
    const plistResponse = await axios.get(`https://api.reservoir.tools/search/collections/v1?name=${query}&limit=8`);

    res.status(200).json(plistResponse.data.collections);
  }
