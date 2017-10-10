import React from 'react';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import InputIcon from './Components/InputIcon';
import Title from './Components/Title';
import Spinner from './Components/Spinner';
import Header from './Components/Header';

storiesOf('Components', module)
.add('InputIcon', () => (
  <InputIcon icon={require('../../Images/header_logo.PNG')}
             label='Label' 
             value='Value'></InputIcon>
))
.add('Title', () => (
  <Title>Login</Title>
))
.add('Spinner', () => (
  <Spinner size="large"></Spinner>
))
.add('Header', () => (
  <Header>STQ Publicidade</Header>
))