import IMatchWithTeamsNames, { IMatch, IMatchGoals } from '../entities/IMatch';

export default interface IMatchServiceRepository {
  getAll(): Promise<IMatchWithTeamsNames[] | IMatch[] | null>;
  getAllInProgress(progress: unknown): Promise<IMatchWithTeamsNames[] | IMatch[] | null>;
  create(match: IMatch): Promise<IMatch>;
  updateFinish(id:number): Promise<void>;
  updateResults(id:number, { homeTeamGoals, awayTeamGoals }: IMatchGoals): Promise<void>;
}
