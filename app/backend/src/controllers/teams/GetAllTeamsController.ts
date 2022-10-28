import { Request, Response } from 'express';
import GetAllTeamsService from '../../services/GetAllTeamsService';

class GetAllTeamsController {
  private _getAllTeamsService: GetAllTeamsService;

  constructor(getAllTeamsService: GetAllTeamsService) {
    this._getAllTeamsService = getAllTeamsService;
  }

  public getAllTeams = async (req: Request, res: Response): Promise<Response> => {
    const allTeams = await this._getAllTeamsService.getAllTeams();
    return res.status(200).json(allTeams);
  };
}

export default GetAllTeamsController;
