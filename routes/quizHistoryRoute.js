const router = require("express").Router();
const QuizHistory = require("../models/QuizHistory");

router.post("/", async (req, res) => {
    try {
        const { username, score, totalquestions } = req.body;
        const quizhistory = new QuizHistory({ username, score, totalquestions });
        await quizhistory.save();
        res.status(200).json({ message: "Quiz history saved successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get("/", async(req,res)=>{
    try {
        const { username } = req.query;
        if (!username) {
            return res.status(400).json({ error: "Username is required" });
        }
        const attempts = await QuizHistory.find({ username });
        res.status(200).json(attempts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

module.exports = router;
