import path from "path";
import fs from "fs";

const { promisify } = require("util");
const readFile = promisify(fs.readFile);
const delay = (ms) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

export default async function handler(req, res) {
  //res.status(200).send(JSON.stringify(data, null, 2));

  const jsonFile = path.resolve("./", "moviedb.json");
  try {
    const readFileData = await readFile(jsonFile);
    await delay(1000);
    const movies = JSON.parse(readFileData).movies;
    if (movies) {
      res.setHeader("Content-Type", "application/json");
      res.status(200).send(JSON.stringify(movies, null, 2));
      console.log("GET /api/movies status: 200");
    }
  } catch (e) {
    console.log("/api/speakers error", e);
    res.status(404).send("File Not Found on server");
  }
}