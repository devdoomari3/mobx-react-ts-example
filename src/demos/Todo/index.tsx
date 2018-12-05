import { observer } from 'mobx-react';
import * as React from 'react';
import { TodoStore } from './Todo.store';

@observer
export class TodoView extends React.Component {
  store = new TodoStore();

  render() {
    return (
      <div>

      </div>
    );
  }
}
