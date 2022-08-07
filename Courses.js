const mongoose = require("mongoose")

const CourseSchema = new mongoose.Schema(
    {
        name:{type: String, required:true, unique:true}, 
        universityName:{type: String, required:true, },
        imgURL:{type: String, required:true},
        facultyProfile :{type: String,},
        certificate:{type: String, required:true},
        courseDuration:{type: String},
        price:{type: String, required:true},
        eligibility:{type:String, require:true}
         
    },
    {
        timestamps:true
    }
)


module.exports  = mongoose.model("Course",CourseSchema)