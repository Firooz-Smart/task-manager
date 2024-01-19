const Task = require("../models/task_model");
const asyncWrapper = require('../middlewares/async')
const { createCustomError } = require('../errors/custom_error')

const getAllTasks = asyncWrapper(async (req, res) => {
    const tasks = await Task.find();
    res.status(200).json({ tasks });
});

const createTask = asyncWrapper(async (req, res) => {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
});

const getTask = asyncWrapper(async (req, res, next) => {
    const task = await Task.findOne({ _id: req.params.id });

    if (!task) {
        return next(createCustomError(`no task with id: ${req.params.id}`, 404))
    }

    res.status(200).json({ task });
});

const updateTask = asyncWrapper(async (req, res) => {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
    });
    res.status(200).json({ task });
});

const deleteTask = asyncWrapper(async (req, res) => {
    const { id: taskId } = req.params;
    const task = await Task.findByIdAndDelete(taskId);

    if (!task) {
        return next(createCustomError(`no task with id: ${req.params.id}`, 404))
    }

    res.status(200).json({ msg: "Deleted successfully" });
});

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,
};
