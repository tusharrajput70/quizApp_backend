const { default: mongoose } = require("mongoose");

const QuestionSchema=new mongoose.Schema({
    question: { 
        type: String,
        required: true 
    },
    options: { 
        type: [String],
        default: [] 
    },
    correctanswer: { 
        type: mongoose.Schema.Types.Mixed, 
        required: true 
    },
    type: {
        type: String,
        enum: ['MCQ', 'INTEGER'],
        required: true
    },
})

module.exports=mongoose.model("Question",QuestionSchema);