const mongoose = require('mongoose');
const password = require("./pass");

const connectionString = `mongodb+srv://<username>:${password}@cluster1.5rxevqm.mongodb.net/?retryWrites=true&w=majority`



//Coneccion a la base de datos 
mongoose.connect(connectionString)
    .then(() => {
        console.log('Database connected')
    }).catch(err => {
        console.error(err)
    });


