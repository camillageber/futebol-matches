import MatchServiceRepository from '../../services/repositories/MatchServiceRepository';
import GetAllMatchesService from '../../services/GetAllMatchesService';
import GetAllMatchesController from './GetAllMatchesController';
import CreateMatchService from '../../services/CreateMatchService';
import CreateMatchController from './CreateMatchController';
import UpdateFinishMatchService from '../../services/UpdateFinishMatchService';
import UpdateFinishMatchController from './UpdateFinishMatchController';
import UpdateMatchResultService from '../../services/UpdateMatchResultService';
import UpdateMatchResultController from './UpdateMatchResultController';

const matchServiceRepository = new MatchServiceRepository();
const getAllMatchesService = new GetAllMatchesService(matchServiceRepository);
const getAllMatchesController = new GetAllMatchesController(getAllMatchesService);

const createMatchService = new CreateMatchService(matchServiceRepository);
const createMatchController = new CreateMatchController(createMatchService);

const updateFinishMatchService = new UpdateFinishMatchService(matchServiceRepository);
const updateFinishMatchController = new UpdateFinishMatchController(updateFinishMatchService);

const updateMatchResultService = new UpdateMatchResultService(matchServiceRepository);
const updateMatchResultController = new UpdateMatchResultController(updateMatchResultService);

export {
  getAllMatchesController,
  createMatchController,
  updateFinishMatchController,
  updateMatchResultController,
};
