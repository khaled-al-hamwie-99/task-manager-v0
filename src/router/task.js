const express = require('express')
const { getAllTasks, createTask, getTask, updateTask, deleteTask } = require('../controllers/task')

const router = express.Router()

router.route('/').post(createTask).get(getAllTasks)
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)

module.exports = router