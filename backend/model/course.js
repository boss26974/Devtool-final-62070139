const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const courseSchema = new Schema({  
    course_name: {
        type: String,
        required: true
    },
    time_study: {
        type: String,
        required: true
    },
    study_term: {
        type: String,
        required: true        
    },
    roundOfAdmid: {
        type: String,
        required: true 
    },
    project: {
        type: String,
        required: true
    },
    faculty: {
        type: String,
        required: true
    },
    sect: {
        type: String,
        required: true
    },
    admid_period: {
        type: String,
        required: true
    },
    plan_study: {
        type: String,
        required: true
    }
})
const Course = mongoose.model("course", courseSchema);

module.exports = Course;