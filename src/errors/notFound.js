

class NotFound extends Error {
    constructor(message, statusCode) {
        super(message)
        this.statusCode = statusCode
    }
}

const createNotFoundError = (msg, status) => {
    return new NotFound(msg, status)
}

module.exports = {
    NotFound,
    createNotFoundError
}
