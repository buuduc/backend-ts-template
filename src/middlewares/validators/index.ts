export { default as envValidator } from './envValidator'
export { default as signUpUserValidator } from './signUpValidator'
export { default as loginValidator } from './loginValidator'
export { default as updatePasswordValidator } from './updatePasswordValidator'


import { Request, Response, NextFunction } from 'express';
import { ObjectSchema, Schema, ValidationError } from 'joi';
import { errorResponse } from 'src/utils/response';
import { RequestParamType } from 'src/constants';
import { codeError } from 'src/utils/codeError';

const validate = (schemaList: { [key in RequestParamType]?: ObjectSchema }) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const errors: ValidationError[] = []
    for (const [paramType, schema] of Object.entries(schemaList)) {
      const { error } = schema.validate(req[paramType as RequestParamType])
      if (error) {
        errors.push(error)
      }
    }
    const valid = errors.length === 0;

    if (valid) {
      next();
    } else {
      let message = ''
      errors.map(error => {
        const { details } = error;
        message = details.map((i: { message: any; }) => i.message).join(',');
      })
      console.log("errors", errors);
      const errorData = {
        code: codeError.INVALID_FORM,
        message
      }
      return errorResponse(res, errorData, 422);
    }
  }
}

export default validate;
