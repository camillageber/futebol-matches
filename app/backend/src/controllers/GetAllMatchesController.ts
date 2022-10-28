import { Request, Response } from 'express';
import GetAllMatchesService from '../services/GetAllMatchesService';

class GetAllMatchesController {
  private _getAllMatchesService: GetAllMatchesService;

  constructor(getAllMatchesService: GetAllMatchesService) {
    this._getAllMatchesService = getAllMatchesService;
  }

  public GetAllMatches = async (req: Request, res: Response): Promise<Response> => {
    const allMatches = await this._getAllMatchesService.getAllMatches();
    return res.status(200).json(allMatches);
  };
}

export default GetAllMatchesController;
