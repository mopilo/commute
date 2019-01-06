const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');

const app = express();

//BODY PARSER MIDDLEWARE
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//DATABASE CONFIGURATION
const db = require("./config/keys").mongoURI;


//CONNECT TO MONGODB
mongoose.connect(db, {useNewUrlParser: true})
    .then(()=> console.log("MONGODB UP AND RUNNING"))
    .catch(err=> console.log(err));

const port = process.env.PORT || 6000

app.listen(port, () => console.log(`server up and running @ ${port} !`));

