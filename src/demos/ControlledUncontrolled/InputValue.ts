import {
  action, observable,
} from 'mobx';

export class InputValue {
  @observable value: string;
  constructor(value: string) {
    this.value = value;
  }
  @action
  setValue(value: string) {
    this.value = value;
  }
}

