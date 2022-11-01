import makeLoginController from './login/loginInstances';
import { getAllTeamsController, getOneTeamController } from './teams/teamsInstances';
import {
  getAllMatchesController,
  createMatchController,
  updateFinishMatchController,
  updateMatchResultController,
} from './matches/matchesInstances';
import leaderboardController from './leaderboard/leaderboardInstances';

export {
  makeLoginController,
  getAllTeamsController,
  getOneTeamController,
  getAllMatchesController,
  createMatchController,
  updateFinishMatchController,
  updateMatchResultController,
  leaderboardController,
};
