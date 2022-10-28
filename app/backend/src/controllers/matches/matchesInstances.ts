import MatchServiceRepository from '../../services/repositories/MatchServiceRepository';
import GetAllMatchesService from '../../services/GetAllMatchesService';
import GetAllMatchesController from '../GetAllMatchesController';

const matchServiceRepository = new MatchServiceRepository();
const getAllMatchesService = new GetAllMatchesService(matchServiceRepository);
const getAllMatchesController = new GetAllMatchesController(getAllMatchesService);

export default getAllMatchesController;
