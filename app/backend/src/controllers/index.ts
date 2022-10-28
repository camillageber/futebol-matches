import makeLoginController from './login/loginInstances';
import { getAllTeamsController, getOneTeamController } from './teams/teamsInstances';
import {
  getAllMatchesController,
  createMatchController,
  updateFinishMatchController,
} from './matches/matchesInstances';

export {
  makeLoginController,
  getAllTeamsController,
  getOneTeamController,
  getAllMatchesController,
  createMatchController,
  updateFinishMatchController,
};
