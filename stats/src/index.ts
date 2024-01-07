import { MatchReader } from './MatchReader'
import { Summary } from './Summary'

const matchReader = MatchReader.compose('football.csv')

matchReader.load()

const summary = Summary.compose('Man United')

summary.build(matchReader.matches)