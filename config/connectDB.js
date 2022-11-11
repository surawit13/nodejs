require('dotenv').config();

// const mysql = require('mysql');

 const { DB_NAME } = process.env;
  // console.log(DB_NAME);
 const mongoose = require('mongoose');

 mongoose.connect('mongodb://localhost:27017/test1', {

    // useNewUrlParser: true
    // useNewUrlParser: true,
    // useUnifiedTopology: true
 },err => {
  if(err) 
  // throw err;
  console.log(err)
});
exports.connect = mongoose;

