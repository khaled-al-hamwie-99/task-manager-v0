const mongoose = require('mongoose')

const taksSchema = new mongoose.Schema({
    description: {
        type: String,
        required: [true, "must provide a name"],
        maxlength: [20, "description can't be more than 20 character"],
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    }
})
const Task = mongoose.model('Task', taksSchema)
module.exports = Task