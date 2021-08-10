const winston = require('winston')
require('winston-mongodb')

module.exports = () => {
    process.on('uncaughtException',(err) => {
        console.log('We got an uncaught exception')
        winston.error(err.message,err)
        process.exit(1)
      })
      
      process.on('unhandledRejection',(err) => {
        console.log('We got an unhandle rejection')
        winston.error(err.message,err)
        process.exit(1)
      })
      
      winston.configure({
        transports: [
          new (winston.transports.File)({ filename: 'logfile.log' })
        ]
      });
      
      winston.add(new winston.transports.MongoDB({
        db:'mongodb://localhost/vidly'
      }))
}