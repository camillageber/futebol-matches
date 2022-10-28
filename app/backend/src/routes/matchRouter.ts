import { Router } from 'express';

import { getAllMatchesController } from '../controllers';
import authenticate from '../middlewares/authenticate';

const matchRouter = Router();

matchRouter.get('/', authenticate, getAllMatchesController.GetAllMatches);

export default matchRouter;
