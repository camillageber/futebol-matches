import { Request, Response } from 'express';
import UpdateMatchResultService from '../../services/UpdateMatchResultService';
import 'express-async-errors';

class UpdateMatchResultController {
  private _updateMatchResultService: UpdateMatchResultService;

  constructor(updateMatchResultService: UpdateMatchResultService) {
    this._updateMatchResultService = updateMatchResultService;
  }

  public updateResult = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    const update = req.body;
    await this._updateMatchResultService.updateResults(Number(id), update);
    return res.status(200).json({ message: 'The goals were updated in this match' });
  };
}

export default UpdateMatchResultController;
