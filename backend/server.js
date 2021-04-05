const express = require("express");
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const port = process.env.PORT || 5000;

mongoose.connect(process.env.MDB_URI, {useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', err=>{
    console.log(err);
})
db.on('open', () =>{
    console.log("connected");
})

// midlwares
app.use(express.json());
app.use(cors());

const userRouter = require("./routes/userRouter");
app.use('/users', userRouter);

const doctorRouter = require("./routes/doctorRouter");
app.use('/doctors', doctorRouter);

const patientRouter = require("./routes/patientRouter");
app.use('/patients', patientRouter);


app.listen(port, () =>{
    console.log(`App listening to port ${port}`);
})