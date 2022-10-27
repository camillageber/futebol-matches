import * as jwt from 'jsonwebtoken';

require('dotenv/config');

const secret = process.env.JWT_SECRET;

// interface IPayload {
//   data: object | string | number | Buffer;
// }

export default class TokenManager {
  static makeToken = (payload: unknown) => {
    const jwtConfig: jwt.SignOptions = {
      expiresIn: '1h',
      algorithm: 'HS256',
    };

    const token = jwt.sign({ data: payload }, secret as jwt.Secret, jwtConfig);
    return token;
  };

  static decodeToken = async (token: string) => {
    try {
      const { data } = jwt.verify(token, secret as jwt.Secret) as jwt.JwtPayload;
      return data;
    } catch (error) {
      return null;
    }
  };
}
