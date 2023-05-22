import { Response } from 'express';

export const successResponse = (res: Response, data: any) => {
  return res.status(200).json({ status: 'success', data })
}

export const errorResponse = (res: Response, error: Error | any, status = 500) => {
  return res.status(status).json({ status: 'error', message: error.message, stack: error.stack })
}

export const unauthorizedResponse = (res: Response) => {
  return res.status(401).json({ status: 'error', message: 'Your authorization has not been accepted' })
}
