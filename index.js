const express = require ("express");
const server = express();
const { PORT } = require("./config/config.js")

server.listen(PORT, () => {
    console.log(`The server is running on ${PORT}`);
});
