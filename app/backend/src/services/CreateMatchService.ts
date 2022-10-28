import { NotFoundError, UnprocessableEntityError } from '../errors';
import { IMatch } from './entities/IMatch';
import MatchServiceRepository from './repositories/MatchServiceRepository';
import TeamServiceRepository from './repositories/TeamServiceRepository';

class CreateMatchService {
  private _matchRepository: MatchServiceRepository;
  private _teamRepository: TeamServiceRepository;

  constructor(matchRepository: MatchServiceRepository) {
    this._matchRepository = matchRepository;
    this._teamRepository = new TeamServiceRepository();
  }

  public createMatch = async (match: IMatch) => {
    console.log('entrei no service createMatch');
    if (match.awayTeam === match.homeTeam) {
      // console.log(match.awayTeam, match.homeTeam, 'console matches');
      throw new UnprocessableEntityError(
        'It is not possible to create a match with two equal teams',
      );
    }
    console.log('passei da validação de times iguais');

    const homeTeam = await this._teamRepository.findOne(match.homeTeam);
    const awayTeam = await this._teamRepository.findOne(match.awayTeam);

    if (!homeTeam || !awayTeam) {
      throw new NotFoundError('There is no team with such id!');
    }
    // console.log('passei da validação notfound');

    const addMatch = await this._matchRepository.create(match);
    // console.log('inseriu a partida -- addMatchService');
    return addMatch;
  };
}

export default CreateMatchService;
