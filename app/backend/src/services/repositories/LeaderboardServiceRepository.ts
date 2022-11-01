import { IMatch } from '../entities/IMatch';
import ILeaderboard from '../entities/ILeaderboard';
import MatchServiceRepository from './MatchServiceRepository';
import TeamServiceRepository from './TeamServiceRepository';
import ITeam from '../entities/ITeam';
import ILeaderboardRepository from './ILeaderboardRepository';

class LeaderboardServiceRepository implements ILeaderboardRepository {
  private teamServiceRepository = new TeamServiceRepository();
  private matchServiceRepository = new MatchServiceRepository();

  private boardObject: ILeaderboard = {
    name: '',
    totalPoints: 0,
    totalGames: 0,
    totalVictories: 0,
    totalDraws: 0,
    totalLosses: 0,
    goalsFavor: 0,
    goalsOwn: 0,
    goalsBalance: 0,
    efficiency: '',
  };

  private findAllMatches = async (): Promise<IMatch[] | null> => {
    const allMatches = await this.matchServiceRepository.progressFalse();

    return allMatches;
  };

  private findAllTeams = async (): Promise<ITeam[] | null> => {
    const allTeams = await this.teamServiceRepository.findAll();

    return allTeams;
  };

  private rulesValidationsHome = async (team: ITeam, matches: IMatch[]) => {
    const board = { ...this.boardObject };
    matches.forEach((match) => {
      if (match.homeTeam === team.id) {
        board.name = team.teamName;
        board.totalGames += 1;
        board.goalsFavor += match.homeTeamGoals;
        board.goalsOwn += match.awayTeamGoals;
        if (match.homeTeamGoals > match.awayTeamGoals) board.totalVictories += 1;
        if (match.homeTeamGoals === match.awayTeamGoals) board.totalDraws += 1;
        if (match.homeTeamGoals < match.awayTeamGoals) board.totalLosses += 1;
        board.goalsBalance = board.goalsFavor - board.goalsOwn;
        board.totalPoints = (board.totalVictories * 3) + board.totalDraws;
        board.efficiency = ((board.totalPoints / (board.totalGames * 3)) * 100).toFixed(2);
      }
    });
    return board;
  };

  private static sortLeaderboard = (board: ILeaderboard[]): ILeaderboard[] => (
    board.sort((a, b) => {
      if (a.totalPoints !== b.totalPoints) return b.totalPoints - a.totalPoints;
      if (a.goalsBalance !== b.goalsBalance) return b.goalsBalance - a.goalsBalance;
      if (a.goalsFavor !== b.goalsFavor) return b.goalsFavor - a.goalsFavor;
      if (a.goalsOwn !== b.goalsOwn) return a.goalsOwn - b.goalsOwn;
      return 1;
    }));

  public filterBoardHome = async () => {
    const teams = await this.findAllTeams();
    const matches = await this.findAllMatches();
    if (teams && matches) {
      const filtered = await Promise.all(teams.map((team) =>
        this.rulesValidationsHome(team, matches)));
      return LeaderboardServiceRepository.sortLeaderboard(filtered);
    }
  };
}

export default LeaderboardServiceRepository;
