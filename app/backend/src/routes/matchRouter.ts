import { Router } from 'express';

import {
  getAllMatchesController,
  createMatchController,
  updateFinishMatchController,
} from '../controllers';
import authenticate from '../middlewares/authenticate';

const matchRouter = Router();

matchRouter.get('/', getAllMatchesController.GetAllMatches);
matchRouter.post('/', authenticate, createMatchController.createMatch);
matchRouter.patch('/:id/finish', updateFinishMatchController.updateFinish);

export default matchRouter;
