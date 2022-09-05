const Path = require('path')
const path = Path.join(__dirname, "../../config/dev.env")
console.log(path)
require('dotenv').config({
    path
})
module.exports = path