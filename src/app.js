const express = require('express')
const connectDb = require('./db/connect')
const path = require('path')
const TaskRouter = require('./router/task')
const notfound = require('./middleware/not-found')
const errorHundeler = require('./middleware/error-hundeler')

const app = express()
const port = process.env.PORT

// middleware
app.use(express.static(path.join(__dirname, '../public')))
app.use(express.json())

// router
app.use('/api/v1/tasks', TaskRouter)

app.use(notfound)
app.use(errorHundeler)

const start = async () => {
    try {
        await connectDb()
        app.listen(port, () => {
            console.log(`app is listening on port ${port}`)
        })
    } catch (e) {
        console.log(e)
    }
}
start()