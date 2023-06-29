const mongoose = require('mongoose');
const DB_URL = require("./pass.js");

const connectionString = `mongodb+srv://gabaeliz:${DB_URL}@cluster0.bcg1hxc.mongodb.net/?retryWrites=true&w=majority`



//Coneccion a la base de datos 
mongoose.connect(connectionString)
    .then(() => {
        console.log('Database connected')
    }).catch(err => {
        console.error(err)
    });


