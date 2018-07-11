import React from 'react';
import { storiesOf } from '@storybook/react';
import SimpleModal from './components/SimpleModal';
import ComplexModal from './components/ComplexModal';

storiesOf('React Create Modal', module)
  .add('Simple Modal', () => <SimpleModal />)
  .add('Complex Modal', () => <ComplexModal />);
