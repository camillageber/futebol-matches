import ITeam from '../entities/ITeam';

export default interface ITeamServiceRepository {
  findAll(): Promise<ITeam[] | null>;
  findOne(id: number): Promise<ITeam | null>;
}
