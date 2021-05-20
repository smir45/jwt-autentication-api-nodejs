//validation
const Joi = require('@hapi/joi');

//register validation
const registerValidation = data => {
    const schema = {
        name: Joi.string()
        .min(8)
        .required(),
        email: Joi.string()
        .min(8)
        .required()
        .email(),
        password: Joi.string()
        .min(8)
        .required()
    
    };
    return Joi.validate(data, schema);
};

//login validation
const loginValidation = data => {
    const schema = {
        email: Joi.string()
        .min(8)
        .required()
        .email(),
        password: Joi.string()
        .min(8)
        .required()
    
    };
    return Joi.validate(data, schema);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;