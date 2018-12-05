import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { TodoView } from '.';

storiesOf('Todo Story', module)
  .add(
    'Simple Counter',
    withInfo({
      inline: true,
    })(() => (
    <TodoView />
  )));
