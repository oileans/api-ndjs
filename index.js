//config inicial
const express = require('express')
const mongoose = require('mongoose')
const app = express()



//middleware
app.use(
    express.urlencoded({
        extended: true,
    })
)
app.use(express.json())


const personRoutes = require('./routes/personRoutes')
app.use('./person', personRoutes)

//endpoint


const DB_USER = 'oileans'
const DB_PASSWORD = encodeURIComponent('aA1dc8Srek66fry9')

mongoose
    .connect(
        'mongodb+srv://oileans:aA1dc8Srek66fry9@cluster0.mvhce0a.mongodb.net/?retryWrites=true&w=majority')
    .then(() => {
        console.log('connected')
        app.listen(3000)
        minVersion: 'TLSv1.2'
    })
    .catch((err) => console.log(err))

