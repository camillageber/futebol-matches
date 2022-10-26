// import { Request, Response, NextFunction } from 'express';
// import { StatusCodes } from 'http-status-codes';
// import UnauthorizedError from '../errors';

// const handleErrors = (err: Error, req: Request, res: Response, _next: NextFunction) => {
//   if (err instanceof UnauthorizedError) {
//     return res.status(StatusCodes.UNAUTHORIZED).json({ message: err.message });
//   }

//   return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Internal Server Error' });
// };

// export default handleErrors;
