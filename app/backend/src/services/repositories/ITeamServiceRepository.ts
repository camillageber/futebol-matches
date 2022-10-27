import ITeam from '../entities/ITeam';

export default interface ITeamServiceRepository {
  findAll(): Promise<ITeam[] | null>;
}
