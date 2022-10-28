import IMatchWithTeamsNames, { IMatch } from './entities/IMatch';
import MatchServiceRepository from './repositories/MatchServiceRepository';

class GetAllMatchesService {
  private _matchRepository: MatchServiceRepository;

  constructor(matchRepository: MatchServiceRepository) {
    this._matchRepository = matchRepository;
  }

  public getAllMatches = async (): Promise<IMatch[] | IMatchWithTeamsNames[] | null> => {
    const matches = await this._matchRepository.getAll();
    return matches;
  };

  public getAllInProgress = async (progress: boolean) => {
    const matchesInProgress = await this._matchRepository.getAllInProgress(progress);
    return matchesInProgress;
  };
}

export default GetAllMatchesService;
