import { Request, Response } from 'express';
import UpdateFinishMatchService from '../../services/UpdateFinishMatchService';
import 'express-async-errors';

class UpdateFinishMatchController {
  private _updateFinishMatchService: UpdateFinishMatchService;

  constructor(updateFinishMatchService: UpdateFinishMatchService) {
    this._updateFinishMatchService = updateFinishMatchService;
  }

  public updateFinish = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    await this._updateFinishMatchService.updateFinish(Number(id));
    return res.status(200).json({ message: 'Finished' });
  };
}

export default UpdateFinishMatchController;
