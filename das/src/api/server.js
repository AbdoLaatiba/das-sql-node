const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

require('dotenv').config();

// const port = 5000;
const port = process.env.PORT || 5000;


mongoose.connect(process.env.MONGODB_URL, {useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', err => {
  logError(err);
});

db.on('open', () =>{
  console.log("connected");
})



// midlwares
app.use(express.json());
app.use(cors());
// end midlwares

// user router
const userRouter = require('./routes/userRouter');
app.use('/users', userRouter);
// end user router

// doc
const docRouter = require("./routes/docRouter");
app.use('/docs', docRouter);
// end doc

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
