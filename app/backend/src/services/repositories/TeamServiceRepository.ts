import ITeamServiceRepository from './ITeamServiceRepository';
import TeamModel from '../../database/models/TeamModel';

class TeamServiceRepository implements ITeamServiceRepository {
  private _teamModel = TeamModel;

  public findAll = async () => {
    const teams = await this._teamModel.findAll();

    if (!teams) return null;
    return teams;
  };

  public findOne = async (id: number) => {
    const team = await this._teamModel.findByPk(id);
    if (!team) return null;

    return team;
  };
}

export default TeamServiceRepository;
