import { FetchTodosAction, DeleteTodoAction } from './todos'

export enum ActionTypes {
  fetchTodos = 'fetchTodos',
  feleteTodo = 'deleteTodo'
}

export type Action = FetchTodosAction | DeleteTodoAction
