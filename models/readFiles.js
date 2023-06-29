const { Schema, model } = require("mongoose");

const excelDataSchema = new Schema({
    employeeID: Number,
    employeeName: String,
    date: Date,
    punchIn: Date,
    punchOut: Date
}); 

const ExcelData = model('ExcelData', excelDataSchema)

module.exports = {
    excelDataSchema
};