import IUser from '../entities/IUser';

export default interface IUserServiceRepository {
  findByEmail(email: string): Promise<IUser | null>;
}
