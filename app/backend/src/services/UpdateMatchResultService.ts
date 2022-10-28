import { IMatchGoals } from './entities/IMatch';
import MatchServiceRepository from './repositories/MatchServiceRepository';

class UpdateMatchResultService {
  private _matchRepository: MatchServiceRepository;

  constructor(matchRepository: MatchServiceRepository) {
    this._matchRepository = matchRepository;
  }

  public updateResults = async (id: number, matchGols: IMatchGoals): Promise<void> => {
    await this._matchRepository.updateResults(id, matchGols);
  };
}

export default UpdateMatchResultService;
