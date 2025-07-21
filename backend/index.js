const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("🚀 Ultimate AI SaaS Backend is running!");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});


added backend/index.js starter code
