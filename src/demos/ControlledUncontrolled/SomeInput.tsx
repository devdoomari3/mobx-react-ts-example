import { observer } from 'mobx-react';
import * as React from 'react';
import { InputValue } from './InputValue';

export type PropsType = {
  inputValue?: InputValue;
};

@observer
export class SomeInput extends React.Component<PropsType> {
  inputValue = this.props.inputValue || new InputValue('');
  render() {
    return (
      <input
        type='text'
        onChange={
          evt =>
            this.inputValue.setValue(evt.target.value)
        }
        value={this.inputValue.value}
      />
    );
  }
}
