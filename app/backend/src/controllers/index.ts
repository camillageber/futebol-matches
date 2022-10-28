import MakeLoginController from './MakeLoginController';
import MakeLoginService from '../services/MakeLoginService';
import UserServiceRepository from '../services/repositories/UserServiceRepository';
import GetAllTeamsController from './GetAllTeamsController';
import GetAllTeamsService from '../services/GetAllTeamsService';
import GetOneTeamService from '../services/GetOneTeamService';
import GetOneTeamController from './GetOneTeamController';
import TeamServiceRepository from '../services/repositories/TeamServiceRepository';
import MatchServiceRepository from '../services/repositories/MatchServiceRepository';
import GetAllMatchesService from '../services/GetAllMatchesService';
import GetAllMatchesController from './GetAllMatchesController';

const userServiceRepository = new UserServiceRepository();
const makeLoginService = new MakeLoginService(userServiceRepository);
const makeLoginController = new MakeLoginController(makeLoginService);

const teamServiceRepository = new TeamServiceRepository();
const getAllTeamsService = new GetAllTeamsService(teamServiceRepository);
const getAllTeamsController = new GetAllTeamsController(getAllTeamsService);

const getOneTeamService = new GetOneTeamService(teamServiceRepository);
const getOneTeamController = new GetOneTeamController(getOneTeamService);

const matchServiceRepository = new MatchServiceRepository();
const getAllMatchesService = new GetAllMatchesService(matchServiceRepository);
const getAllMatchesController = new GetAllMatchesController(getAllMatchesService);

export default makeLoginController;

export { getAllTeamsController, getOneTeamController, getAllMatchesController };
