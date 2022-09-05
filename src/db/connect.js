const mongoose = require('mongoose')
require('./setEnviroment')
const url = process.env.MONGODB_URL

// C:/D/program/weeb/Node/mongodb/bin/mongod.exe --dbpath=C:/D/program/weeb/Node/mongodb-data
const connectDB = () => {
    return mongoose.connect(url, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    })
}

module.exports = connectDB