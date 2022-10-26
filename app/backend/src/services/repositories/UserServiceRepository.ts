import IUserServiceRepository from './IUserServiceRepository';
import User from '../../database/models/UserModel';
import IUser from '../entities/IUser';

class UserServiceRepository implements IUserServiceRepository {
  private _model: UserModel;

  public findByEmail = async (email: string) => {
    const userFinded = await this._model.findOne({ where: email });

    if (!userFinded) return null;

    const user: IUser = {
      id: userFinded.id,
      username: userFinded.username,
      role: userFinded.role,
      email: userFinded.email,
      password: userFinded.password,
    };

    return user;
  };
}

export default UserServiceRepository;
