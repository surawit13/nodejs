const mongoose = require('mongoose');
const { connect } = require('../config/connectDB');
const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
  name: 'string',
  email : 'string',
  password : 'string',
  salary: 'number',
  address: 'string',
  department_id: 'string',
  token : 'string'
}
, 
{ collection: 'employee' }
,
{
  timestamps : true
}
);

const EmployeeModel = connect.model('employee', EmployeeSchema);

module.exports = EmployeeModel;