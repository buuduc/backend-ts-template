import express, { NextFunction, Response, Request } from 'express'
import { logError } from '../utils/logger'
import { errorResponse, successResponse } from 'src/utils/response'

const handleErrors = (controller: any) => {
  return async function (req: Request, res: Response, next: NextFunction) {
    try {
      const result = await controller(req, res, next)

      return successResponse(res, result);

    } catch (error) {
      console.log('🚀 🚀 file: errorHandler.ts:13 🚀 error', error)
      if (!error.statusCode) {
        console.error(error)
      }

      errorResponse(res, error, 500)
    }
  }
}
export default handleErrors
