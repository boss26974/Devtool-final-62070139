const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const studentSchema = new Schema({
    mate_id: {
        type: String,
        required: true
    },
    mate_fullname: {
        type: String,
        required: true
    }
})
const Student = mongoose.model("students", studentSchema);

module.exports = Student;