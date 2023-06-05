const app = require('./app.js')
const { PORT } = require('./config.js')
const db = require('./database.js')

app.listen(PORT,() => console.log('server running in port ',PORT))

//connect db
db()