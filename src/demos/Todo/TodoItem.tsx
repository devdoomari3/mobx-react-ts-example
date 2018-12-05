import * as React from 'react';
import { Todo } from './Todo.store';
export type PropsType = {
  todo: Todo;
  editMode: boolean;
};

export const TodoItem: React.StatelessComponent<PropsType> = props => {
  const {
    todo,
    editMode,
  } = props;
  if (editMode) {
    return (
      <li>
        <input
          type='text'
          onChange={evt => todo.update({
            ...todo,
            title: evt.target.value,
          })}
        />
      </li>
    );

  }

  return (
    <li

    />
  );
};
