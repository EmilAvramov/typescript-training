import { CSVFileReader } from './CSVFileReader'
import { MatchResult, MatchData } from '../definitions'
import { dateStringToDate } from '../utils'

export class MatchReader extends CSVFileReader<MatchData> {
  mapRow(row: string[]): MatchData {
    return [
      dateStringToDate(row[0]),
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      row[5] as MatchResult,
      row[6]
    ]
  }
}
