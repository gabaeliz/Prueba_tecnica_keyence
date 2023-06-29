const fs = require(fs);
const xlsx = require('xlsx');
const mongoose = require('mongoose');
const ExcelData = require('../models/readFiles');

const workbook = xlsx.readFile();
const woorksheet = workbook.Sheets[workbook.SheetNames[0]];
const jsonData = xlsx.utils.sheet_to_json(woorksheet);

ExcelData.insertMany(jsonData)
    .then(() => {
        console.log('Excel data correctly imported to MongoDB');
        mongoose.disconnect();
    })
    .catch((error) => {
        console.error('Error when importing data from Excel:', error);
        mongoose.disconnect();
    });