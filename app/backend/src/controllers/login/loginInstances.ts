import MakeLoginController from '../MakeLoginController';
import MakeLoginService from '../../services/MakeLoginService';
import UserServiceRepository from '../../services/repositories/UserServiceRepository';

const userServiceRepository = new UserServiceRepository();
const makeLoginService = new MakeLoginService(userServiceRepository);
const makeLoginController = new MakeLoginController(makeLoginService);

export default makeLoginController;
