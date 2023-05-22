
import { NextFunction, Request, Response } from 'express'
import { errorResponse, successResponse } from './response';

export type HandlerFunction = (req: Request, res: Response, next: NextFunction) => any

const handlerWrapper = (handler: HandlerFunction) => async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await handler(req, res, next)
    if (res.headersSent) { return }
    return successResponse(res, data);
  } catch (error) {
    return errorResponse(res, error);
  }
}

export default handlerWrapper
