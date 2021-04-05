const express = require("express");
const cors = require("cors");
const app = express();
const db = require("./models");
require("dotenv").config();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());

const userRoutes = require("./routes/user-router");
app.use("/api/users", userRoutes);

db.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`app is listening to http://localhost:${port}`);
  });
});
