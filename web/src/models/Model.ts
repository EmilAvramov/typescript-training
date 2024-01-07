import { AxiosResponse } from 'axios'
import { EventMap, ModelAttributes, ApiSync, WithID } from '../types/interfaces'

export class Model<T extends object & WithID> {
  constructor(
    private attributes: ModelAttributes<T>,
    private events: EventMap,
    private sync: ApiSync<T>
  ) {}

  on = this.events.on

  trigger = this.events.trigger

  get = this.attributes.get

  set(update: T): void {
    this.attributes.set(update)
    this.events.trigger('change')
  }

  fetch(): void {
    const id = this.attributes.get('id')

    if (typeof id !== 'number') {
      throw new Error('Needs an ID')
    }

    this.sync
      .fetch(id)
      .then((res: AxiosResponse<T>): void => this.attributes.set(res.data))
  }

  save(): void {
    this.sync
      .save(this.attributes.getAll())
      .then((): void => this.trigger('save'))
      .catch((): void => this.trigger('error'))
  }
}
