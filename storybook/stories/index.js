import React from 'react';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import LoginContainer from './Containers/LoginContainer';
import FlatListContainer from './Containers/FlatListContainer';

import Title from './Components/Title';
import Spinner from './Components/Spinner';
import Header from './Components/Header';
import Input from './Components/Input';

storiesOf('Containers', module)
.add('LoginContainer', () => (
  <LoginContainer></LoginContainer>
))
.add('FlatListDemo', () => (
  <FlatListDemo></FlatListDemo>
))

storiesOf('Components', module)
.add('Input', () => (
  <Input></Input>
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