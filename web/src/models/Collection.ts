import axios from 'axios'
import { EventMap } from './Event'

export class Collection<T, K> {
  models: T[] = []
  events: EventMap = new EventMap()

  constructor(public rootUrl: string, public deserialize: (json: K) => T) {}

  get on() {
    return this.events.on
  }

  get trigger() {
    return this.events.trigger
  }

  fetch(): void {
    axios.get(this.rootUrl).then((res) => {
      res.data.forEach((val: K) => {
        this.models.push(this.deserialize(val))
      })
    })

    this.trigger('change')
  }
}
