const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
// const port = 5000;
const port = process.env.PORT || 5000;

// midlwares
app.use(express.json());
app.use(cors());
// end midlwares

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
