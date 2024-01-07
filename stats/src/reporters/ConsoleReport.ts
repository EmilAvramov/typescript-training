import { OutputTarget } from "../definitions";

export class ConsoleReport implements OutputTarget {
  print(report: string): void {
    console.log(report)
  }
}