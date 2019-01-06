const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegisterInput (data) {
    let errors = {};
    functions
        data.name = !isEmpty(data.name) ? data.name : "";
        data.email = !isEmpty(data.email) ? data.email : "";
        data.password = !isEmpty(data.password) ? data.password : "";
        data.confirmPassword = !isEmpty(data.confirmPassword) ? data.confirmPassword : "";

        //checks username
        if(Validator.isEmpty(data.name)){ errors.name = "Name field is required"; }

        //email
        if(Validator.isEmpty(data.email)){ errors.email = "Email field is required"; }
        else if (!Validator.isEmpty(data.email)){  errors.email = "Email is invalid"}

        //password
        if(Validator.isEmpty(data.password)){ errors.password = "Password field is required"; }
        if(Validator.isEmpty(data.confirmPassword)){ errors.confirmPassword = "Confirm Password field is required"; }

        if(!Validator.isLength(data.password, {min: 6, max: 30})){ errors.password ="Password must be atleast 6 characters"; }
        if(!Validator.equals(data.password, data.confirmPassword)){ errors.confirmPassword = " Confirm password must match"; }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};

