import Joi from 'joi';


export const emailValidation = (currentJoi: Joi.StringSchema) => currentJoi.email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
export const passwordValidation = (currentJoi: Joi.StringSchema) =>
currentJoi.min(8)
.regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
.messages({ "string.pattern.base": "{{#label}} should contain a minimum of 8 characters, at least 1 digit, at least 1 lowercase letter, 1 uppercase letter  and 1 special character." })
