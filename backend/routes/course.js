const express = require("express")
const mongodb = require("mongodb")
var mongoose = require("mongoose");
var Course = require("../model/course")
var dbURL = "mongodb+srv://boss2697:qwerty23868@myclassmateproject.9hez4.mongodb.net/kmitl?retryWrites=true&w=majority"

mongoose.connect(dbURL);
mongoose.connection.on("connected", () => {
    console.log("database connected 2")
})

const router = express.Router();

router.get("/allcourses", async (req, res) => {
    const allcourses = await Student.find({})
    res.json(allcourses)
})

module.exports = router;