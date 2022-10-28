export interface IMatch {
  id?: number;
  homeTeam: number;
  homeTeamGoals: number;
  awayTeam: number;
  awayTeamGoals: number;
  inProgress?: boolean | string;
}

export default interface IMatchWithTeamsNames extends IMatch {
  teamHome: {
    teamName: string;
  },
  teamAway: {
    teamName:string;
  }
}
