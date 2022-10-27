import ITeam from './entities/ITeam';
import TeamRepositoryService from './repositories/TeamServiceRepository';

class GetAllTeamsService {
  private _teamRepository: TeamRepositoryService;

  constructor(teamRepository: TeamRepositoryService) {
    this._teamRepository = teamRepository;
  }

  public getAllTeams = async (): Promise<ITeam[] | null> => {
    const teams = await this._teamRepository.findAll();
    return teams;
  };
}

export default GetAllTeamsService;
