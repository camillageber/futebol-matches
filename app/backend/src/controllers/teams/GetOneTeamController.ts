import { Request, Response } from 'express';
import GetOneTeamService from '../../services/GetOneTeamService';

class GetOneTeamController {
  private _getOneTeamService: GetOneTeamService;

  constructor(getOneTeamService: GetOneTeamService) {
    this._getOneTeamService = getOneTeamService;
  }

  public getOneTeam = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    const team = await this._getOneTeamService.getOneTeam(Number(id));
    return res.status(200).json(team);
  };
}

export default GetOneTeamController;
