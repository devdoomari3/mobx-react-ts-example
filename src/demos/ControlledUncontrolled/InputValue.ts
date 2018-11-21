import {
  observable as mobservable, action,
} from 'mobx'

export class InputValue {
  @mobservable value: string;
  constructor(value: string) {
    this.value = value
  }
  @action set(value: string) {
    this.value = value;
  }
}