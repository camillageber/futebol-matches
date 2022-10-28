import MatchServiceRepository from './repositories/MatchServiceRepository';

class UpdateFinishMatchService {
  private _matchRepository: MatchServiceRepository;

  constructor(matchRepository: MatchServiceRepository) {
    this._matchRepository = matchRepository;
  }

  public updateFinish = async (id: number) => {
    const updated = await this._matchRepository.updateFinish(id);
    return updated;
  };
}

export default UpdateFinishMatchService;
