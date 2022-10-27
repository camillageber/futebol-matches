import { Router } from 'express';

import { getAllTeamsController, getOneTeamController } from '../controllers';

const teamRouter = Router();

teamRouter.get('/', getAllTeamsController.getAllTeams);
teamRouter.get('/:id', getOneTeamController.getOneTeam);

export default teamRouter;
