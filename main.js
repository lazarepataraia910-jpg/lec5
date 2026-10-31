require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('connected to mongodb'))
    .catch(err => console.log('mongodb connection error:', err.message))

app.get('/', (req, res) => {
    res.send('hello world')
})

app.listen(3000, () => {
    console.log('server running on http://localhost:3000')
})
