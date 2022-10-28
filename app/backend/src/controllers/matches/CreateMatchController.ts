import { Request, Response } from 'express';
import CreateMatchService from '../../services/CreateMatchService';
import 'express-async-errors';

class CreateMatchController {
  private _createMatchService: CreateMatchService;

  constructor(createMatchService: CreateMatchService) {
    this._createMatchService = createMatchService;
  }

  public createMatch = async (req: Request, res: Response): Promise<Response> => {
    const match = req.body;
    // console.log(match, 'controller match');
    const addMatch = await this._createMatchService.createMatch(match);
    return res.status(201).json(addMatch);
  };
}

export default CreateMatchController;
