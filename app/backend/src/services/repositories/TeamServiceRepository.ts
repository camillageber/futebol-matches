import ITeamServiceRepository from './ITeamServiceRepository';
import TeamModel from '../../database/models/TeamModel';

class TeamServiceRepository implements ITeamServiceRepository {
  private _teamModel = TeamModel;

  public findAll = async () => {
    const teams = await this._teamModel.findAll();

    if (!teams) return null;
    return teams;
  };
}

export default TeamServiceRepository;
