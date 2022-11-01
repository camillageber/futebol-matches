import { Request, Response } from 'express';
import LeaderboardService from '../../services/LeaderboardService';

class LeaderboadController {
  private _leaderboardService: LeaderboardService;

  constructor(leaderboardService: LeaderboardService) {
    this._leaderboardService = leaderboardService;
  }

  public filterBoardHome = async (req: Request, res: Response): Promise<Response> => {
    const filterBoard = await this._leaderboardService.filterBoardHome();
    return res.status(200).json(filterBoard);
  };
}

export default LeaderboadController;
