import LeaderboardServiceRepository from '../../services/repositories/LeaderboardServiceRepository';
import LeaderboardService from '../../services/LeaderboardService';
import LeaderboardController from './LeaderboardController';

const leaderboardServiceRepository = new LeaderboardServiceRepository();
const leaderboardService = new LeaderboardService(leaderboardServiceRepository);
const leaderboarController = new LeaderboardController(leaderboardService);

export default leaderboarController;
