
require('dotenv').config()
const express = require("express");
const nodemailer = require('nodemailer');
const routes = require('./routes/m_router');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname + '/public')));
app.set("view engine", "ejs");
app.use(express.json());
app.use('/', routes)






app.use("*", (req,res) =>{
    res
        .status(404)
       .send("<h1>Page does not exist</h1>")
});



const port = process.env.PORT || 3000
app.listen(port, () =>{
    console.log(`server have started on port ${port} .....`)
});