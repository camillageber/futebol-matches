import ILeaderboard from '../entities/ILeaderboard';

export default interface ILeaderboardRepository {
  filterBoardHome(): Promise<ILeaderboard[] | undefined>;
}
