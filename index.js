const express = require("express");
const cors = require("cors");
const connectToMongoDB = require("./connectToMongoDB");
const questionRoute = require("./routes/questionRoute");
const quizHistoryRoute = require("./routes/quizHistoryRoute");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/questions", questionRoute);
app.use("/api/quiz-history", quizHistoryRoute);

app.listen(5500, () => {
    connectToMongoDB();
    console.log("Server running at port 5500");
});
