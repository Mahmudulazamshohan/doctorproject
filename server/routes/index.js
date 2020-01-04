const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors')
const passport = require('passport')

//---------------------------------
const app = express()
app.use('/public',express.static(path.join(__dirname,'../public')));
const Request = require('./../utils/Request')
const login = require('./modules/login')
const signup = require('./modules/signup')
const auth = require('./modules/auth')
//Body Parser
//---------------------------------
require('../utils/Passport')(passport)
app.use(passport.initialize())

app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  const request = new Request(req)
  const name = request.all()
  res.send(name)
})

// Login Route
app.use('/api/login',login)
app.use('/api/signup',signup)
app.use('/api/auth',auth)
app.get('*', (req, res) => {

  res.json({
    code:401,
    message:'Request API not found',
    data:{}
  })
})

module.exports = app
