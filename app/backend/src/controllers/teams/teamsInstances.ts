import GetAllTeamsController from '../GetAllTeamsController';
import GetAllTeamsService from '../../services/GetAllTeamsService';
import GetOneTeamService from '../../services/GetOneTeamService';
import GetOneTeamController from '../GetOneTeamController';
import TeamServiceRepository from '../../services/repositories/TeamServiceRepository';

const teamServiceRepository = new TeamServiceRepository();
const getAllTeamsService = new GetAllTeamsService(teamServiceRepository);
const getAllTeamsController = new GetAllTeamsController(getAllTeamsService);

const getOneTeamService = new GetOneTeamService(teamServiceRepository);
const getOneTeamController = new GetOneTeamController(getOneTeamService);

export { getAllTeamsController, getOneTeamController };
