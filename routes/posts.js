const express = require("express");
const { Router } = require("express");
const rounter = express.Router();
const Post = require(../models/Posts); //for mongoose to handle data

router.get("/", (req, res)=>{
    res.send("This is the post page");
});

router.get("/specific-post",(req,res)=>{
    res.send("This is a specific post");
});

module.exports = router;