import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { ControlledUncontrolledDemo } from '..';

storiesOf('ControlledUncontrolled', module)
  .add(
    'ControlledUncontrolled',
    withInfo({ inline: true })(() => <ControlledUncontrolledDemo />),
  );
