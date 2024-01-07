import { Model } from '../models/Model'
import { WithID } from '../types/interfaces'

export abstract class View<T extends Model<K>, K extends WithID> {
  regions: { [key: string]: Element } = {}

  constructor(public parent: Element, public model: T) {
    this.bindModel()
  }

  abstract template(): string

  bindModel(): void {
    this.model.on('change', () => this.render())
  }

  eventMap(): { [key: string]: () => void } {
    return {}
  }

  regionMap(): { [key: string]: string } {
    return {}
  }

  bindEvents(fragment: DocumentFragment): void {
    const events = this.eventMap()

    for (let key in events) {
      const [eventName, selector] = key.split(':')

      fragment.querySelectorAll(selector).forEach((el: Element) => {
        el.addEventListener(eventName, events[key])
      })
    }
  }

  bindRegions(fragment: DocumentFragment): void {
    const regionMap = this.regionMap()

    for (let key in regionMap) {
      const selector = regionMap[key]
      const element = fragment.querySelector(selector)
      if (element) {
        this.regions[key] = element
      }
    }
  }

  onRender(): void {}

  render(): void {
    this.parent.innerHTML = ''

    const element = document.createElement('template')
    element.innerHTML = this.template()
    this.bindEvents(element.content)
    this.bindRegions(element.content)

    this.onRender()

    this.parent.append(element.content)
  }
}
