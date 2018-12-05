import { observable } from 'mobx';
import {
  observer,
} from 'mobx-react';
import * as React from 'react';
import { InputValue } from './InputValue';
import { SomeInput } from './SomeInput';

@observer
export class ControlledUncontrolledDemo extends React.Component<{}> {
  @observable inputValue = new InputValue('aaa');
  render() {
    return (
      <div>
        <div>
          <span> Linked Input 1</span>
          <SomeInput key='1'
            inputValue={this.inputValue}
          />
        </div>
        <p> Linked input value: {this.inputValue.value} </p>
        <div>
          <span> Linked Input 2</span>
          <SomeInput key='1'
            inputValue={this.inputValue}
          />
        </div>
        <p> not-linked input: </p>
        <SomeInput key='3' />
      </div>
    );
  }
}
