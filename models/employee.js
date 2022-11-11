const mongoose = require('mongoose');
const { connect } = require('../config/connectDB');
const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
  name: 'string',
  salary: 'number',
  address: 'string',
  department_id: 'string'
}
, 
{ collection: 'employee' }
);

const EmployeeModel = connect.model('employee', EmployeeSchema);

module.exports = EmployeeModel;