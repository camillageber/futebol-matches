import { Router } from 'express';

import { getAllMatchesController } from '../controllers';

const matchRouter = Router();

matchRouter.get('/', getAllMatchesController.GetAllMatches);

export default matchRouter;
