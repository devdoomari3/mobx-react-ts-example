import * as React from 'react'
import { observable } from 'mobx'
import {
  observer
} from 'mobx-react'
import { SomeInput } from './SomeInput';
import { InputValue } from './InputValue';

export type PropsType = {

}

@observer
export class ControlledUncontrolledInput extends React.Component<PropsType> {
  @observable inputValue = new InputValue('aaa')
  render() {
    return (
      <div>
        <SomeInput key="1"
          inputValue={this.inputValue}
        />
        <p> input value: {this.inputValue.value} </p>
        <p> Another input: </p>
        <SomeInput key="2"
          inputValue={this.inputValue}
        />
        <p> not-linked input: </p>
        <SomeInput key="3"
        />
      </div>
    )
  }
}
