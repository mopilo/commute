const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require ('passport');
const keys = require("../../config/keys");

const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

const User = require("../../models/User");

// @route POST api/users/register
// @desc Register user
// @access Public

router.post("/register", (req, res)=> {
    //form validation
    const {errors, isValid} = validateRegisterInput(req.body);

    //check validation
    if(!isValid){
        return res.status(400).json(errors);
    }

    User.findOne({email: req.body.email}).then(user => {
        if(user){ return res.status(400).json({email: "Email already exists"}); }

        const newUser = new User ({
            name : req.body.name,
            email: req.body.email,
            password: req.body.password
        });

        //hash password before being saved to db
        bcrypt.genSalt(10, (err, salt)=>{
            bcrypt.hash(newUser.password, salt, (err, hash) => {
                if (err) throw err;
                newUser.password = hash;
                newUser.save().then(user=> res.json(user)).catch(err => console.log(err));
            });
        });
    
    })
})

// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public

router.post("/login", (req, res) => {
    const {errors, isValid} = validateLoginInput(req.body);

    if(!isValid){ return res.status(400).json(errors); }

    const email = req.body.email;
    const password = req.body.password;

    User.findOne({email}).then(user => {
        if(!user){ return res.status(404).json({emailnotfound: "Email not found"}); }

        bcrypt.compare(password, user.password).then(isMatch => {
            if(isMatch){
                //create payload
                const payload ={
                    id: user.id,
                    name: user.name
                };

                jwt.sign(payload, keys.secretOrKey, {
                    expiresIn: 31556926
                }, (err, token) => {
                    res.json({
                        success: true,
                        token: "Bearer" + token
                    })
                })
            }else{
                return res.status(400).json({error: "Password incorrect"});
            }
        });
    });
});

module.exports = router;
