const mongoose = require('mongoose')

module.exports = () => {
    if (process.env.NODE_ENV === 'test') {
        const DB = process.env.TEST_DB || process.env.DEV_DB
        mongoose.connect(DB, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        })
            .then(() => console.log(`Connected to ${DB} DB`))
    }
}