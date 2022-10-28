import { Router } from 'express';

import { getAllMatchesController, createMatchController } from '../controllers';
import authenticate from '../middlewares/authenticate';

const matchRouter = Router();

matchRouter.get('/', getAllMatchesController.GetAllMatches);
matchRouter.post('/', authenticate, createMatchController.createMatch);

export default matchRouter;
