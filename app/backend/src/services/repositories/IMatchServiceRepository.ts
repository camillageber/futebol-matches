import IMatchWithTeamsNames, { IMatch } from '../entities/IMatch';

export default interface IMatchServiceRepository {
  getAll(): Promise<IMatchWithTeamsNames[] | IMatch[] | null>;
  getAllInProgress(progress: unknown): Promise<IMatchWithTeamsNames[] | IMatch[] | null>;
}
