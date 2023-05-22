import * as joi from 'joi'

export const validateWith = <T>(
  joiSchema: joi.ObjectSchema<T>,
  input: Record<string, any>
): T => {
  const { value, error } = joiSchema.validate(input)

  if (error) {
    throw error
  }

  return value as T
}
