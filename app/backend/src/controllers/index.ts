import MakeLoginController from './MakeLoginController';
import MakeLoginService from '../services';
import UserServiceRepository from '../services/repositories';

const userServiceRepository = new UserServiceRepository();
const makeLoginService = new MakeLoginService(userServiceRepository);
const makeLoginController = new MakeLoginController(makeLoginService);

export default makeLoginController;
