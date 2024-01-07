import { WinsAnalysis } from './analysers/WinsAnalysis'
import { Analyzer, MatchData, OutputTarget } from './definitions'
import { ConsoleReport } from './reporters/ConsoleReport'

export class Summary {
  static compose(team: string): Summary {
    return new Summary(new WinsAnalysis(team), new ConsoleReport())
  }
  
  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

  build(matches: MatchData[]): void {
    const output = this.analyzer.run(matches)
    this.outputTarget.print(output)
  }
}