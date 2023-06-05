const {Schema, model} = require('mongoose')

const urlSchema = new Schema({
    urlOrigin: {
        type: String,
        required: true,
    },
    urlShort: {
        type: String,
        required: true,
    }
})

const urlModel = model('url', urlSchema)

module.exports = urlModel