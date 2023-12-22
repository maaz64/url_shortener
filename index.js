// importing the required files, middleware and modules
const express = require('express');
const db = require('./Config/mongoDB');
const app = express();
const passport = require('passport');
const passportJWT = require('./Config/passport-jwt');
const routes = require('./Routes/index');

// defining port
const Port =  8000;

// using this middleware to decode forms data if its urlencode
app.use(express.urlencoded({extended:true}));

// using this middleware to decode forms data if the data is in json format
app.use(express.json());

// defining routes
app.use('/',routes);

// starting the server
app.listen(Port, (error)=>{

    if(error){
        console.log("Error occured while running the server");
    }
    console.log(`Server is up and running on port ${Port}`);
});