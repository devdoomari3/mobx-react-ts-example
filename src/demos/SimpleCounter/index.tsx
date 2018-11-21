import * as React from 'react'
import {
  observer,
} from 'mobx-react'
import { SimpleCounterState } from './SimpleCounter.state';

@observer
export class SimpleCounter extends React.Component<{test?: number}> {
  observableState = new SimpleCounterState()
  render () {
    return (
      <div>
        <h1> count: {this.observableState.count}</h1>
        <button
          onClick={() => this.observableState.addOne()}
        >
        +1
        </button>
      </div>
    )
  }
}
