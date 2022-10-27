import { Router } from 'express';

import { getAllTeamsController } from '../controllers';

const teamRouter = Router();

teamRouter.get('/', getAllTeamsController.getAllTeams);

export default teamRouter;
