require("dotenv").config();
const express = require("express");

const server = require("./api/server");

const PORT = process.env.PORT || 3001;

server.get("/", (req, res) => {
  res.json({ message: "Education API" });
});

server.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
