const { log } = require('console')
const { CustomApiError } = require('../errors/custom_error')

const errorHandlerMiddleware = (err, req, res, next) => {

    if (err instanceof CustomApiError) {
        console.log('custome error');
        return res.status(err.statusCode).json({ msg: err.message })
    }
    return res.status(500).json({ msg: 'Something went wrong' })
}


module.exports = errorHandlerMiddleware