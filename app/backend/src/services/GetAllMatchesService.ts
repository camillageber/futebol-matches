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
}

export default GetAllMatchesService;
