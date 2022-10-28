import MatchModel from '../../database/models/MatchModel';
import Team from '../../database/models/TeamModel';
import { IMatch, IMatchGoals } from '../entities/IMatch';
import IMatchServiceRepository from './IMatchServiceRepository';

class MatchServiceRepository implements IMatchServiceRepository {
  private _matchModel = MatchModel;

  public getAll = async () => {
    const matches = await this._matchModel.findAll({
      include: [
        { model: Team, as: 'teamHome', attributes: ['teamName'] },
        { model: Team, as: 'teamAway', attributes: ['teamName'] },
      ],
    });
    return matches;
  };

  public getAllInProgress = async (progress: boolean) => {
    const macthesInProgress = await this._matchModel.findAll({
      where: { inProgress: progress },
      include: [
        { model: Team, as: 'teamHome', attributes: ['teamName'] },
        { model: Team, as: 'teamAway', attributes: ['teamName'] },
      ],
    });

    return macthesInProgress;
  };

  public create = async (match: IMatch) => {
    // console.log('entrei no repo match');
    const addMatch = await this._matchModel.create({ ...match, inProgress: true });

    return addMatch;
  };

  public updateFinish = async (id: number): Promise<void> => {
    await this._matchModel.update(
      { inProgress: false },
      { where: { id } },
    );
  };

  public updateResults =
  async (id: number, { homeTeamGoals, awayTeamGoals }: IMatchGoals): Promise<void> => {
    await this._matchModel.update(
      { homeTeamGoals, awayTeamGoals },
      { where: { id } },
    );
  };
}
export default MatchServiceRepository;
