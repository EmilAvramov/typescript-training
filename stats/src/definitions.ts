export enum MatchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D'
}

export type MatchData = [
  Date,
  string,
  string,
  number,
  number,
  MatchResult,
  string
]

export interface DataReader {
  read(): void
  data: string[][]
}

export interface Analyzer {
  run(matches: MatchData[]): string
}

export interface OutputTarget {
  print(report: string): void
}
