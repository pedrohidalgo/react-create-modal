import React from 'react';
import { storiesOf } from '@storybook/react';
import SimpleModal from './components/SimpleModal';

storiesOf('React Create Modal', module)
  .add('simple modal', () => <SimpleModal />)
  .add('with some emoji', () => <p>this is a paragraph</p>);
