import { AxiosPromise } from "axios"
import { Callback } from "./types"

export interface UserProps {
  id?: number
  name?: string
  age?: number
}

export interface WithID {
  id?: number
}

export interface ModelAttributes<T> {
  get<K extends keyof T>(key: K): T[K]
  set(value: T): void
  getAll(): T
}

export interface ApiSync<T> {
  fetch(id: number): AxiosPromise<T>
  save(data: T): AxiosPromise<T>
}

export interface EventMap {
  on(eventName: string, callback: Callback): void
  trigger(eventName: string): void
}