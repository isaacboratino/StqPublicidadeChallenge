import React from 'react';
import {View, ScrollView} from 'react-native';
import {Card} from 'react-native-elements';

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
  <View>
    <Header>STQ Publicidade</Header>
    <FlatListContainer></FlatListContainer>
  </View>
))

storiesOf('Components', module)
.add('Input', () => (
  <ScrollView>
    <Input 
      label='Input text com icone'
      icon={{reverse:true, name:'user', type:'font-awesome', color:'#517fa4'}}
      placeholder='Digite um texto'></Input>

    <Input 
      label='Input password com icone'
      secureTextEntry={true} 
      icon={{reverse:true, name:'key', type:'font-awesome', color:'#517fa4'}}></Input>

      <Input 
        label='Input sem icone'
        placeholder='Digite um texto'></Input>

      <Input label='Input sem icone com validacao' error={{message:'Mensagem de validacao'}}></Input>

      <Input label='' placeholder='Input sem labe ecom placeholder'></Input>

    </ScrollView>
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