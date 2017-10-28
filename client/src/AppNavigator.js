import React, {Component} from 'react';
import ReactNative from 'react-native';
import { StackNavigator } from 'react-navigation';
import LoginContainer from './containers/LoginContainer';
import UserListContainer from './containers/UserListContainer';

export const AppNavigator = StackNavigator({
  Home: { screen: LoginContainer },
  RestrictedArea: { screen: UserListContainer }
});