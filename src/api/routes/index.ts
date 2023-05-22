import { Router } from 'express';
import second from '..'

// Init router
const router = Router();

class BaseRouter {
  get routes(){
    // router.use('/users', userRouter.routes);
    // router.use('/', )
    return router;
  }
}

export default new BaseRouter();
