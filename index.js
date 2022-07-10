const express = require("express");

const startServer = require('./app/startServer')
const connectToDB = require('./app/connectToDB')

const app = express();

// Starting server and connect to Database
startServer(app,3001)
connectToDB()


app.get('/',(req,res)=>{
    res.send('hello world')
})
