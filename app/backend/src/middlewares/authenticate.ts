import { Request, Response, NextFunction } from 'express';
import IUser from '../services/entities/IUser';
import TokenManager from '../helpers/TokenManager';

const authenticate = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  const data = (await TokenManager.decodeToken(token)) as IUser;

  if (!data) {
    return res.status(401).json({ message: 'Token must be a valid token' });
  }

  req.body = data;

  return next();
};

export default authenticate;

// código inspirado na mentoria de BlogsApi com POO e SOLID ministrado pelo Gustavo.
