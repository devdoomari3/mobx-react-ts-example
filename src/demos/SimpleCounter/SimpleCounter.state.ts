import {
  action, observable,
} from 'mobx';

export class SimpleCounterState {
  @observable count: number = 0;

  @action addOne() {
    this.count += 1;
  }
}
