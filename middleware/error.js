const winston = require('winston')

module.exports = (error,req,res,next) => {
    winston.error(error.message,error)
    res.status(500).json({message:error.message})
}