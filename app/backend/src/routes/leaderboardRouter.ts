import { Router } from 'express';
import { leaderboardController } from '../controllers';

const leaderboardRouter = Router();

leaderboardRouter.get('/home', leaderboardController.filterBoardHome);

export default leaderboardRouter;
