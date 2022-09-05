const Task = require('../modules/Task')
const asyncWrapper = require('../middleware/async')
const { createNotFoundError } = require('../errors/notFound')

const getAllTasks = asyncWrapper(async (req, res) => {
    const tasks = await Task.find()
    res.send(tasks)
})

const createTask = asyncWrapper(async (req, res) => {
    const task = new Task(req.body)
    await task.save()
    res.status(201).send(task)
})

const getTask = asyncWrapper(async (req, res, next) => {
    const _id = req.params.id
    const task = await Task.findOne({ _id })
    if (!task) {
        return next(createNotFoundError(`the id ${_id} does not exist`, 404))
    }
    res.send(task)
})

const updateTask = asyncWrapper(async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['description', 'completed']
    const isValidate = updates.every(update => { return allowedUpdates.includes(update) })
    if (!isValidate)
        return res.status(400).send({ error: "unvalid update" })
    const _id = req.params.id
    const task = await Task.findOne({ _id })
    if (!task)
        return next(createNotFoundError(`the id ${_id} does not exist`, 404))
    updates.forEach(update => { task[update] = req.body[update] })
    await task.save()
    res.send(task)
})

const deleteTask = asyncWrapper(async (req, res) => {
    const task = await Task.findByIdAndDelete({ _id: req.params.id })
    if (!task)
        return next(createNotFoundError(`the id ${_id} does not exist`, 404))
    res.send(task)
})
module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}