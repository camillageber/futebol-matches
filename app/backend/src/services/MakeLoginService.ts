import Joi = require('joi');
import * as bcrypt from 'bcryptjs';
import TokenManager from '../helpers/TokenManager';
import { UnauthorizedError, BadRequestError } from '../errors';
import ILogin from './entities/ILogin';
import IUserServiceRepository from './repositories/IUserServiceRepository';

class MakeLoginService {
  private _userRepository: IUserServiceRepository;
  private missingFields = 'All fields must be filled';
  private incorretFilds = 'Incorrect email or password';

  constructor(userRepository: IUserServiceRepository) {
    this._userRepository = userRepository;
  }

  public execute = async ({ email, password }: ILogin) => {
    await this.validateRequest({ email, password });
    const user = await this._userRepository.findByEmail(email);

    if (!user) throw new UnauthorizedError(this.incorretFilds);

    const passwordDataBase = user.password;
    const compare = bcrypt.compareSync(password, passwordDataBase);
    if (!user || !compare) throw new UnauthorizedError(this.incorretFilds);

    const token = TokenManager.makeToken(user);
    return token;
  };

  public async validateRequest(login: unknown) {
    const schema = Joi.object({
      email: Joi.string().email().required().messages({
        'any.required': this.missingFields,
        'string.empty': this.missingFields,
        'string.email': this.incorretFilds,
      }),
      password: Joi.string().required().messages({
        'any.required': this.missingFields,
        'string.empty': this.missingFields,
      }),
    });
    const { error } = schema.validate(login);
    if (error) throw new BadRequestError(error.message);
  }
}
export default MakeLoginService;
