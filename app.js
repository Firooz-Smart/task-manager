const express = require("express");
const app = express();
const connectDB = require("./db/connect");
require("dotenv").config();

const tasksRoute = require("./routes/tasks_route");
const notFound = require("./middlewares/not-found")
const errorHandler = require('./middlewares/error-handler')

app.use(express.json());

//routes

app.use("/api/v1/tasks", tasksRoute);
app.use(notFound)
app.use(errorHandler)


const port = process.env.PORT || 4000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, console.log(`Server is listening on port ${port}...`));
    } catch (error) {
        console.log(error);
    }
};

start();



