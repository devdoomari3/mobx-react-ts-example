import {
  observable, action,
} from 'mobx'

export class SimpleCounterState {
  @observable count: number = 0;

  @action addOne() {
    this.count++
  }
}