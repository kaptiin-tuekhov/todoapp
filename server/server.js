const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
const { TodoRouter } = require('./routers')

const app = express()
app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(cors())
app.use('/todos', TodoRouter)

app.listen(8080, () => console.log('server listening on 8080'))
