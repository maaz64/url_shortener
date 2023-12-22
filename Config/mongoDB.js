// importing the required modules
const mongoose = require('mongoose');
require('dotenv').config();

//  setting up the cloud mongodb database
mongoose.connect(process.env.MONGO_URL).then(()=>{
  console.log("Connected to database successfully");
}).catch((err)=>{
  console.log("Error in connecting database",err);
});
