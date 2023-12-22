const express = require('express');
const db = require('./Config/mongoDB');
const app = express();
const passport = require('passport');
const passportJWT = require('./Config/passport-jwt');
const routes = require('./Routes/index');

const Port =  8000;

app.use(express.urlencoded({extended:true}));
app.use(express.json());


app.use('/',routes);


app.listen(Port, (error)=>{

    if(error){
        console.log("Error occured while running the server");
    }
    console.log(`Server is up and running on port ${Port}`);
});