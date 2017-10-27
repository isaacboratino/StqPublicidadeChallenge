import React from 'react';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import LoginContainer from '../../src/containers/LoginContainer';
import FlatListContainer from '../../src/containers/FlatListContainer';

import Title from '../../src/components/Title';
import Spinner from '../../src/components/Spinner';
import Header from '../../src/components/Header';
import Input from '../../src/components/Input';

storiesOf('Containers', module)
.add('LoginContainer', () => (
  <LoginContainer></LoginContainer>
))
.add('FlatListContainer', () => (
  <FlatListContainer></FlatListContainer>
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