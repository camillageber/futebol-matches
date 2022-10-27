import { Request, Response, NextFunction } from 'express';
// import { StatusCodes } from 'http-status-codes';
import { UnauthorizedError, BadRequestError } from '../errors';

const handleErrors = (err: Error, req: Request, res: Response, _next: NextFunction) => {
  if (err instanceof UnauthorizedError) {
    return res.status(401).json({ message: err.message });
  }
  if (err instanceof BadRequestError) {
    return res.status(400).json({ message: err.message });
  }

  return res.status(500).json({ message: 'Internal Server Error' });
};

export default handleErrors;
