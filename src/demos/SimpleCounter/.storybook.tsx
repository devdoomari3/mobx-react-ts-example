import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from "@storybook/addon-info";
import { SimpleCounter } from '.';

storiesOf('SimpleCounter', module)
  .add(
    'Simple Counter',
    withInfo({
      inline: true,
    })(() => (
    <SimpleCounter />
  )))