import ITeam from './entities/ITeam';
import TeamRepositoryService from './repositories/TeamServiceRepository';

class GetOneTeamService {
  private _teamRepository: TeamRepositoryService;

  constructor(teamRepository: TeamRepositoryService) {
    this._teamRepository = teamRepository;
  }

  public getOneTeam = async (id: number): Promise<ITeam | null> => {
    const team = await this._teamRepository.findOne(id);
    return team;
  };
}

export default GetOneTeamService;
