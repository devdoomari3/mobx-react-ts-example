import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from "@storybook/addon-info";
import { ControlledUncontrolledInput } from '..';

storiesOf('ControlledUncontrolled', module)
  .add(
    'ControlledUncontrolled',
    withInfo({ inline: true })(() => <ControlledUncontrolledInput />)
  )