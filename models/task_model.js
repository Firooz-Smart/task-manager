const mongoose = require('mongoose')

const TaskSchema = mongoose.Schema({
    name: { type: String, required: [true, 'must provide name'], trim: true },
    completed: { type: Boolean, default: false }
})

module.exports = mongoose.model('Task', TaskSchema)