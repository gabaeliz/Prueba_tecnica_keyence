require('./mongo.js');
const express = require ("express");
const server = express();
const { PORT } = require("./config/config.js");
const routes = require("./server/routes/employee.js");


server.use(express.json());
server.use("/api/v1", routes)

server.listen(PORT, () => {
    console.log(`The server is running on ${PORT}`);
});
