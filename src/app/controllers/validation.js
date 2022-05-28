const Joi =require('@hapi/joi');

const updateValidation = data =>{
    const schema = Joi.object({
        fullname: Joi.string()
            .min(5),
        username: Joi.string()
            .min(2),
        email: Joi.string()
            .min(15)
            .email(),
        password: Joi.string()
            .min(6),
    });
    return schema.validate(data);
}

const loginValidation = data =>{
    const schema = Joi.object({
        email: Joi.string()
            .min(15)
            .required()
            .email(),
        password: Joi.string()
            .min(6)
            .required()
    });
    return schema.validate(data);
}

module.exports.updateValidation = updateValidation;
module.exports.loginValidation = loginValidation;