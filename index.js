const express=require("express")
const mongoose=require("mongoose")
const dotenv = require("dotenv")
const authRoute=require ("./routes/auth")
const courseRoute=require ("./routes/courses")

dotenv.config()

const app=express()
mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("DB connection successful")
}).catch((err)=>{console.log(err)})

app.use(express.json())


app.use("/api/auth",authRoute)
app.use("/api/courses",courseRoute)






app.listen(process.env.PORT || 5000,()=>{
    console.log("Backend server is running on port 5000")
})
