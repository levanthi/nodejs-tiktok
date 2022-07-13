const express = require("express");
const session = require('express-session');

const passportSetup = require('./passport')
const passport = require('passport')
const cors = require('cors')

const authRoute = require('./routers/auth')
const startServer = require('./app/server')
const connectToDB = require('./app/connectToDB')

const app = express();

// Starting server and connect to Database
startServer(app,3001)
connectToDB()

app.use(passport.initialize());
app.use(session({ 
    resave: false,
    saveUninitialized: true,
    secret: 'bla bla bla'
}))
app.use(cors({
    origin:'https://localhost:3000',
    methods:'GET,POST,PUT,DELETE'
}))

app.use('/auth',authRoute)


