const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const postRouter = require('./routes/posts')

dotenv.config()

const app = express()

app.use(bodyParser.json({limit:"30mb", extended:true}))
app.use(bodyParser.urlencoded({limit:"30mb", extended:true}))
app.use(cors())

app.use("/posts", postRouter)

const CONNECTION_URL= process.env.MONGO_URI
const PORT = process.env.PORT || 5000

mongoose.connect(CONNECTION_URL, {useNewUrlParser:true, useUnifiedTopology:true})
.then(()=>app.listen(PORT, ()=>console.log(`server running on port: ${PORT}`)))
.catch((error)=>console.log(error.message))