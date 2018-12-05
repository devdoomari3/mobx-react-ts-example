import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { SimpleCounter } from '.';

storiesOf('SimpleCounter', module)
  .add(
    'Simple Counter',
    withInfo({
      inline: true,
    })(() => (
    <SimpleCounter />
  )));
