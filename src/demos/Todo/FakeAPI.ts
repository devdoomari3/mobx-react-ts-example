import cloneDeep from 'lodash/cloneDeep';
import { ITodo } from './types';

export function waitMs(timeMs) {
  return new Promise(resolve => {
    setTimeout(resolve);
  });
}

export class FakeAPI {
  todos: ITodo[] = [];
  async getTodos() {
    return this.todos;
  }
  async addTodo(todo: ITodo) {
    this.todos = cloneDeep(this.todos);
    this.todos.push(todo);

    return this.todos;
  }
}
