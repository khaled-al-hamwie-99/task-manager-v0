const { NotFound } = require('../errors/notFound')

const errorHundeler = (err, req, res, next) => {
    if (err instanceof NotFound)
        return res.status(err.statusCode).json({ msg: err.message })
    return res.status(500).json({ msg: err })
}

module.exports = errorHundeler