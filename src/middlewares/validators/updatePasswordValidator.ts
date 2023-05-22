import Joi from 'joi';
import { UserType } from 'src/constants';
import { emailValidation, passwordValidation } from 'src/utils/schemaValidations';
const schema = Joi.object({
  password: passwordValidation(Joi.string().required()),
  passwordConfirmation: Joi.any().equal(Joi.ref('password'))
    .required()
    .label('Confirm password')
    .messages({ 'any.only': '{{#label}} does not match' })
})

export default schema;
