require("dotenv").config(); //access variable in .env file

const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.get("/", (req, res)=>{
    res.send('This is the landing page');
});

app.get("/posts", (req, res) =>{
    res.send("This is the post page");
});

mongoose.connect(
    process.env.DATABASE_CONNECTION_STRING,
    { useNewUrlParser: true } ,
    () =>{
     console.log("Connected to DB");
    }
);

app.listen(3000);
