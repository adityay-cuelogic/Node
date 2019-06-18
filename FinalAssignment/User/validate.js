const Joi = require("joi");

const updateUserByNameValidator = (req,res,next) => {
    const schema = Joi.object().keys({
        address: Joi.string().required(),
        age: Joi.number().required()
    });
    Joi.validate(req.body, schema, (err, value) => {
        if (err) {
            // send a 422 error response if validation fails
            res.status(500).json({
                status: 'error',
                message: err,
                data: req.body
            });
        } else {
           next() 
        }
    });
};

const signupValidator = (req,res,next) => {
    const schema = Joi.object().keys({
        userName: Joi.string().min(4).max(30).required(),
        password: Joi.string().min(8).required(),
        address: Joi.string().required(),
        age: Joi.number().required(),
        created: Joi.date()
    });
    Joi.validate(req.body, schema, (err) => {
        if (err) {
            // send a 422 error response if validation fails
            res.status(500).json({
                status: 'error',
                message: err,
                data: req.body
            });
        } else {
           next() 
        }
    });
};
module.exports.updateUserByNameValidator = updateUserByNameValidator;
module.exports.signupValidator = signupValidator;