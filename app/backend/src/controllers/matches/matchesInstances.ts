import MatchServiceRepository from '../../services/repositories/MatchServiceRepository';
import GetAllMatchesService from '../../services/GetAllMatchesService';
import GetAllMatchesController from './GetAllMatchesController';
import CreateMatchService from '../../services/CreateMatchService';
import CreateMatchController from './CreateMatchController';
import UpdateFinishMatchService from '../../services/UpdateFinishMatchService';
import UpdateFinishMatchController from './UpdateFinishMatchController';

const matchServiceRepository = new MatchServiceRepository();
const getAllMatchesService = new GetAllMatchesService(matchServiceRepository);
const getAllMatchesController = new GetAllMatchesController(getAllMatchesService);

const createMatchService = new CreateMatchService(matchServiceRepository);
const createMatchController = new CreateMatchController(createMatchService);

const updateFinishMatchService = new UpdateFinishMatchService(matchServiceRepository);
const updateFinishMatchController = new UpdateFinishMatchController(updateFinishMatchService);

export { getAllMatchesController, createMatchController, updateFinishMatchController };
