import Joi from "joi";

const commentValidator= Joi.object({
    name: Joi.string().regex(/^[a-zA-ZА-яёЁіІїЇҐґєЄ]{1,20}$/).required().messages({
        'string.pattern.base':'Name must contain only letters',
    }),
    email: Joi.string().email({ tlds: { allow: false } }).required().messages({
        'string.email':'Email must be valid',
    }),
    body: Joi.string().min(5).max(100).required().messages({
        'string.min':'Body must be at least 5 characters',
        'string.max':'Body must be less than 100 characters',
    })

})

export {commentValidator}