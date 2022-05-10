const express = require("express")
const mongodb = require("mongodb")
var mongoose = require("mongoose");
var Student = require("../model/student")
var dbURL = "mongodb+srv://boss2697:qwerty23868@myclassmateproject.9hez4.mongodb.net/My_Classmate"

mongoose.connect(dbURL);
mongoose.connection.on("connected", () => {
    console.log("database connected")
})

const router = express.Router();

router.get("/allstudents", async (req, res) => {
    const allstudents = await Student.find({})
    res.send(allstudents)
})

router.post("/addstudents", async (req, res) => {
    try{
        const newStudent = new Student({
            mate_id: req.body.mate_id,
            mate_fullname: req.body.mate_fullname
        })

        await Student.create(newStudent);
        res.send("success to add new student")
    }catch(err){
        console.log(err)
    }
})

module.exports = router;