import Joi from 'joi';
import { UserType } from 'src/constants';
import { emailValidation, passwordValidation } from 'src/utils/schemaValidations';
const schema = Joi.object({
  email: emailValidation(Joi.string().required()),
  password: passwordValidation(Joi.string().required())

})

export default schema;
