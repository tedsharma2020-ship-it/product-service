const express = require("express");

const app = express();

const PORT = 3002;

app.get("/", (req, res) => {
  res.send("Product Service is LIVE!");
});

app.get("/products", (req, res) => {
  res.json([
    { id: 1, name: "Laptop" },
    { id: 2, name: "Mobile" }
  ]);
});

app.listen(PORT, () => {
  console.log(`Product Service running on port ${PORT}`);
});
