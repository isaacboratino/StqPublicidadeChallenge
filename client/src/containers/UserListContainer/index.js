import UserFlatList from './UserFlatList';
import UserRouteRelay from './UserRouteRelay';
import React, { Component } from 'react';
import Relay, {
  DefaultNetworkLayer,
  RootContainer,
} from 'react-relay/classic';
import {GlobalVariablesConfig} from '../../configs';

Relay.injectNetworkLayer(
  new DefaultNetworkLayer(GlobalVariablesConfig.urlServerGraphQL)
);

export default class UserListContainer extends Component {
  static navigationOptions = {
      title: '',
      header: null
  }

  render(): void {
    return (
      <RootContainer
        Component={UserFlatList}
        route={new UserRouteRelay({first: 4})}
      />
    );
  }
}