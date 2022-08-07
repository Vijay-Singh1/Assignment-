const Course = require("../modals/Courses");
const CryptoJS = require("crypto-js");
const {
  verifyTokenAndAdmin,
} = require("./verifyToken");

const router = require("express").Router();

//CREATE

router.post("/add/course", verifyTokenAndAdmin, async(req,res)=>{

    const newCourse = new Course(req.body)

    try{
        const savedCourse = await newCourse.save();
        res.status(200).json(savedCourse)

    }catch(err){
        res.status(500).json(err)
    }

})

//UPDATE

router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  
  try {
    const updatedCourse = await Course.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedCourse);
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE

router.delete("/delete/course/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Course.findByIdAndDelete(req.params.id);
    res.status(200).json("Course has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET Course

router.get("/find/:id",verifyTokenAndAdmin,  async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    

    res.status(200).json(course);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL COURSES

router.get("/getall/", verifyTokenAndAdmin, async (req, res) => {

  try {
    const courses = await Course.find();
    res.status(200).json(courses);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
