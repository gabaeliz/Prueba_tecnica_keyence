const { Schema,model } =  require('mongoose');

const employeeShema = new Schema({
    employeeID: Number,
    employeeName: String,
    date: Date,
    punchIn: Date,
    punchOut: Date
})

const Employee = model('Employee', employeeShema) 

module.exports = { 
    Employee
};