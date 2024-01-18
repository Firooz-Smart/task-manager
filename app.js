const express = require("express");
const app = express();
const connectDB = require("./db/connect");
require("dotenv").config();

const tasksRoute = require("./routes/tasks_route");
const notFound = require("./middlewares/not-found")

app.use(express.json());

//routes

app.use("/api/v1/tasks", tasksRoute);
app.use(notFound)

const port = 4000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, console.log("Server is listening on port 4000"));
    } catch (error) {
        console.log(error);
    }
};

start();



