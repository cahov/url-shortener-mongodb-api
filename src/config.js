const dotenv = require('dotenv')
dotenv.config()

const MONGODB_URI = process.env.MONGODB_URI
const PORT = process.env.PORT || 3000
const NODE_ENV= process.env.NODE_ENV || 'production'
module.exports = {MONGODB_URI, PORT, NODE_ENV}