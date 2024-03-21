const express = require("express");
const cors = require("cors")

const app = express()
const port = 3000

app.use(cors())

//Db connection
const conn = require("./db/conn")

conn();

//Routes
const routes = require("./routes/router");

app.use("/api", routes)

app.use(express.json())

app.listen(3000, function() {
    console.log("servidor online!")
});