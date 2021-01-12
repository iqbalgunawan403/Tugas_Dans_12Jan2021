const express = require('express')
const mongoose = require('mongoose')
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv/config')

//Middlewares
app.use(cors())
app.use(bodyParser.json())

//import routes
const postsRoute = require('./routes/posts')

app.use('/posts', postsRoute)

//ROUTES
app.get('/', (req,res) => {
	res.send('We are on Home')
})

//connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true}, () => console.log('connected to DB!'))



//How to we start listening to the server
app.listen(3001)