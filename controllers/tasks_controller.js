const Task = require('../models/task_model')



const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json({ tasks });
    } catch (error) {
        res.status(500).send(error['message']);
    }
}

const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(201).json({ task })
    } catch (error) {
        res.status(500).json({ msg: error['message'] });
    }
}

const getTask = async (req, res) => {

    try {
        // const { id: taskId } = req.params
        const task = await Task.findOne({ _id: req.params.id })

        if (!task) {
            return res.status(404).json({ msg: `no task with id: ${taskId}` })
        }

        res.status(200).json({ task })

    } catch (error) {
        res.status(500).json({ msg: error['message'] });
    }

}

const updateTask = async (req, res) => {
    try {
        const { name, completed } = req.body
        const task = await Task.findByIdAndUpdate(req.params.id, { name: name, completed: completed }, { new: true })
        res.status(200).json({ task });
    } catch (error) {
        res.status(500).json({ msg: error['message'] });
    }
}

const deleteTask = async (req, res) => {
    try {
        const { id: taskId } = req.params;
        const task = await Task.findByIdAndDelete(taskId);

        if (!task) {
            return res.status(404).json({ msg: `no task with id: ${taskId}` })
        }

        res.status(200).json({ msg: 'Deleted successfully' });
    } catch (error) {
        res.status(500).json({ msg: error['message'] });
    }
}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}