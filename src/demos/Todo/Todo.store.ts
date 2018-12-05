import {
  action, computed, observable,
} from 'mobx';
import { FakeAPI } from './FakeAPI';
import { ITodo } from './types';

export class Todo implements ITodo {
  @observable id: string;
  @observable title: string;
  @observable done: boolean;
  constructor(args: ITodo) {
    this.id = args.id;
    this.title = args.title;
    this.done = args.done;
  }
  update(args: ITodo) {
    this.id = args.id;
    this.title = args.title;
    this.done = args.done;
  }
}

export class TodoStore {
  api = new FakeAPI();
  @observable todos: Todo[] = [];
  @computed get notYetDoneTodos() {
    return this.todos.filter(todo => !todo.done);
  }

  @action addTodo(todo: Todo) {
    this.todos.push(todo);
  }
  @action removeTodo(nth: number) {
    this.todos.splice(nth, 1);
  }
}
