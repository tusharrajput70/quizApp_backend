const { default: mongoose } = require("mongoose");

const QuizHistorySchema=new mongoose.Schema({
    username: { 
        type: String,
        required: true 
    },
    score: { 
        type: Number,
        required: true 
    },
    totalquestions:{
        type: Number,
        required: true
    }
})

module.exports=mongoose.model("QuizHistory",QuizHistorySchema);