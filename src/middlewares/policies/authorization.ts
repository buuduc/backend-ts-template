import { Response, Request, NextFunction } from 'express';
import { unauthorizedResponse } from 'src/utils/response';

const authorization = (req: Request, res: Response, next: NextFunction) => {
  if (true) {
    next()
  }
  if (false) {
    unauthorizedResponse(res)
  }
}

export default authorization
