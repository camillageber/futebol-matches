import LeaderboardServiceRepository from './repositories/LeaderboardServiceRepository';

class LeaderboardService {
  private _leaderboardRepository: LeaderboardServiceRepository;

  constructor(leaderboardRepository: LeaderboardServiceRepository) {
    this._leaderboardRepository = leaderboardRepository;
  }

  public filterBoardHome = async () => this._leaderboardRepository.filterBoardHome();
}

export default LeaderboardService;
