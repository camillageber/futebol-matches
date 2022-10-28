import { Request, Response } from 'express';
import GetAllMatchesService from '../../services/GetAllMatchesService';
import 'express-async-errors';

class GetAllMatchesController {
  private _getAllMatchesService: GetAllMatchesService;

  constructor(getAllMatchesService: GetAllMatchesService) {
    this._getAllMatchesService = getAllMatchesService;
  }

  public GetAllMatches = async (req: Request, res: Response): Promise<Response> => {
    const { inProgress } = req.query;

    if (!inProgress) {
      const allMatches = await this._getAllMatchesService.getAllMatches();
      return res.status(200).json(allMatches);
    }
    const queryTrueOrFalse = Boolean(JSON.parse(inProgress as string));
    const matchesInProgress = await this._getAllMatchesService.getAllInProgress(queryTrueOrFalse);
    return res.status(200).json(matchesInProgress);
  };
}

export default GetAllMatchesController;
