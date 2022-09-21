import Joi from "joi";

const userValidator = Joi.object({
    name: Joi.string().regex(/^[a-zA-ZА-яёЁіІїЇҐґєЄ]{1,20}$/).required().messages({
        'string.pattern.base':'Name must contain only letters',
    }),
    email: Joi.string().email({ tlds: { allow: false } }).required().messages({
        'string.email':'Email must be valid',
    }),
    phone: Joi.string().regex(/^\d{10}$/).required().messages({
        'string.pattern.base':'Phone must have 10 digits 0...',
    })
})

export {userValidator}