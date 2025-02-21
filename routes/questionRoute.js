const router=require("express").Router();
const Question=require("../models/Question");

router.get("/", async(req,res)=>{
    try {
        const questions=await Question.find();
        res.status(200).json(questions);
    } catch (error) {
        res.status(500).json(error);
    }
})

module.exports=router;