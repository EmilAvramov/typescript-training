import fs from 'fs'

export abstract class CSVFileReader<T> {
  data: T[] = []

  constructor(public filename: string) {}

  abstract mapRow(row: string[]): T

  read(): void {
    const fileContents = fs.readFileSync(this.filename, { encoding: 'utf-8' })
    this.data = fileContents
      .split('\n')
      .map((row: string): string[] => row.split(','))
      .map(this.mapRow)
  }

}
