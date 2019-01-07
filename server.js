const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const passport = require("passport");

const users = require("./routes/api/users");

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

//passport middleware
app.use(passport.initialize());

//passport config
require("./config/passport")(passport);

//routes
app.use("/api/users", users)

const port = process.env.PORT || 6000

app.listen(port, () => console.log(`server up and running @ ${port} !`));

