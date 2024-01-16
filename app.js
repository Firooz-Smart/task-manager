const express = require('express');
const app = express();
const connectDB = require('./db/connect')
const tasksRoute = require('./routes/tasks_route');
require('dotenv').config()



app.use(express.json())

//routes
app.get('/hello', (req, res) => {
    res.send('Task Manager App')
})

app.use('/api/v1/tasks', tasksRoute)

const port = 4000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, console.log('Server is listening on port 4000'));
    } catch (error) {
        console.log(error);
    }
}


start()
