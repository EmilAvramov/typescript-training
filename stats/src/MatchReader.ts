import { dateStringToDate } from './utils'
import { MatchResult, MatchData, DataReader } from './definitions'
import { CSVFileReader } from './CSVFileReader'

export class MatchReader {
  static compose(filename: string): MatchReader {
    return new MatchReader(new CSVFileReader(filename))
  }

  matches: MatchData[] = []

  constructor(public reader: DataReader) {}

  load(): void {
    this.reader.read()
    this.matches = this.reader.data.map((row: string[]): MatchData => {
      return [
        dateStringToDate(row[0]),
        row[1],
        row[2],
        parseInt(row[3]),
        parseInt(row[4]),
        row[5] as MatchResult,
        row[6]
      ]
    })
  }
}
