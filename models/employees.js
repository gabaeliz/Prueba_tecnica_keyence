const { model, Schema } =  require('mongoose');

const listEmployeeShema = new Schema({
    employeeID: Number,
    employeeName: String,
    date: Date,
    punchIn: TimeRanges,
    punchOut: TimeRanges
})

const listEmployee = model('listEmployees', listEmployeeShema) 

module.exports = { 
    listEmployee
};