import { Request, Response } from 'express';
import MakeLoginService from '../services';
import 'express-async-errors';

export default class MakeLoginController {
  private _makeLoginService: MakeLoginService;

  constructor(makeLoginService: MakeLoginService) {
    this._makeLoginService = makeLoginService;
  }

  public execute = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const token = await this._makeLoginService.execute({ email, password });
    return res.status(200).json({ token });
  };
}