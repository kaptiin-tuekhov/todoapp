const mongoose = require('mongoose')
const {Todo} = require('./todoModel.js')

mongoose.connect('mongodb://localhost/simple')

module.exports = {Todo}
