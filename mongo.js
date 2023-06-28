const mongoose = require('mongoose');
const { DB_PASS } = require("./password.js")
const connectionString = `mongodb+srv://gabaeliz:${DB_PASS}@cluster1.clb1syy.mongodb.net/?retryWrites=true&w=majority`

//Coneccion a la base de datos 
mongoose.connect(connectionString)
    .then(() => {
        console.log('Database connected')
    }).catch(err => {
        console.error(err)
    });


