import { Router } from 'express';

import {
  getAllMatchesController,
  createMatchController,
  updateFinishMatchController,
  updateMatchResultController,
} from '../controllers';
import authenticate from '../middlewares/authenticate';

const matchRouter = Router();

matchRouter.get('/', getAllMatchesController.GetAllMatches);
matchRouter.post('/', authenticate, createMatchController.createMatch);
matchRouter.patch('/:id/finish', updateFinishMatchController.updateFinish);
matchRouter.patch('/:id', updateMatchResultController.updateResult);

export default matchRouter;
