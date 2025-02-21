const mongoose = require("mongoose");
const connectToMongoDB=require("./connectToMongoDB");
const Question = require("./models/Question");

const questions = [
    // Multiple-Choice Questions
    { question: "Which planet is closest to the Sun?", options: ["Venus", "Mercury", "Earth", "Mars"], correctanswer: "B", type: "MCQ" },
    { question: "Which data structure organizes items in a First-In, First-Out (FIFO) manner?", options: ["Stack", "Queue", "Tree", "Graph"], correctanswer: "B", type: "MCQ" },
    { question: "Which of the following is primarily used for structuring web pages?", options: ["Python", "Java", "HTML", "C++"], correctanswer: "C", type: "MCQ" },
    { question: "Which chemical symbol stands for Gold?", options: ["Au", "Gd", "Ag", "Pt"], correctanswer: "A", type: "MCQ" },
    { question: "Which of these processes is not typically involved in refining petroleum?", options: ["Fractional distillation", "Cracking", "Polymerization", "Filtration"], correctanswer: "D", type: "MCQ" },

    // Integer-Type Questions
    { question: "What is the value of 12 + 28?", correctanswer: 40, type: "INTEGER" },
    { question: "How many states are there in the United States?", correctanswer: 50, type: "INTEGER" },
    { question: "In which year was the Declaration of Independence signed?", correctanswer: 1776, type: "INTEGER" },
    { question: "What is the value of pi rounded to the nearest integer?", correctanswer: 3, type: "INTEGER" },
    { question: "If a car travels at 60 mph for 2 hours, how many miles does it travel?", correctanswer: 120, type: "INTEGER" }
];

const seedQuestions = async () => {
    await connectToMongoDB();
    try {
        await Question.insertMany(questions);
        console.log("Questions added successfully!");
        process.exit();
    } catch (error) {
        console.error("Error inserting questions:", error);
        process.exit(1);
    }
};

seedQuestions();
