import IUserServiceRepository from './IUserServiceRepository';
import IUser from '../entities/IUser';
import UserModel from '../../database/models/UserModel';

class UserServiceRepository implements IUserServiceRepository {
  private userModel = UserModel;

  public findByEmail = async (email: string) => {
    const userFinded = await this.userModel.findOne({ where: { email } });

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
