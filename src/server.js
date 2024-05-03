const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (request, response) => {
  return response.send(`<h1>Hello world - Deploy!</h1>`);
});

app.listen(3333, () => {
  console.log("Server listening!");
});
