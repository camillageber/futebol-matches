import { Router } from 'express';

import makeLoginController from '../controllers';
import authenticate from '../middlewares/authenticate';

const userRouter = Router();

userRouter.post('/', makeLoginController.execute);
userRouter.get('/validate', authenticate, makeLoginController.validate);

export default userRouter;
