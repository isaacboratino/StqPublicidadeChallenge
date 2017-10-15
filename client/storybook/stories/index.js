import React from 'react';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import LoginContainer from './containers/LoginContainer';
import FlatListContainer from './containers/FlatListContainer';

import Title from './components/Title';
import Spinner from './components/Spinner';
import Header from './components/Header';
import Input from './components/Input';

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