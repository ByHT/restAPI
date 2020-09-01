const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.get("/", (req, res)=>{
    res.send('This is the landing page');
});

app.listen(3000);
