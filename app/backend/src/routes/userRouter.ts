import { Router } from 'express';

import makeLoginController from '../controllers';

const userRouter = Router();

userRouter.post('/', makeLoginController.execute);

export default userRouter;
