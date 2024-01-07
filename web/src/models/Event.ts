import { type Callback } from '../types/types'

export class EventMap {
  eventMap: { [key: string]: Callback[] } = {}

  on = (eventName: string, callback: Callback): void => {
    const handlers = this.eventMap[eventName] || []
    handlers.push(callback)
    this.eventMap[eventName] = handlers
  }

  trigger = (eventName: string): void => {
    const handlers = this.eventMap[eventName]

    if (!handlers || handlers.length === 0) {
      return
    }

    handlers.forEach((callback: Callback) => callback())
  }
}
