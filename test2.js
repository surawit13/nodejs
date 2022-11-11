
// Importing mongoose module
const mongoose = require("mongoose")
  
// Database Address
const url = "mongodb://localhost:27017/test1"
  
// Connecting to database
mongoose.connect(url).then((ans) => {
  console.log("ConnectedSuccessful")
}).catch((err) => {
  console.log("Error in the Connection")
})
  
// Calling Schema class
const Schema = mongoose.Schema;
  
// Creating Structure of the collection
const EmployeeSchema = new Schema({
    name: String,
    salary: Number,
    address: String,
    department_id: String
  });
  
  
// Creating collection
const collections = mongoose.model('emp1',EmployeeSchema)
  
// Inserting one document
collections.find({}).then((ans) => {
    console.log(ans)
}).catch((err) => {
  console.log(err.Message);
})