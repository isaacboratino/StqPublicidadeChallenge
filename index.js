import { AppRegistry } from 'react-native';
import StorybookUI from './storybook';
import App from './src/App';

import Relay, { 
    Route,
    RootContaine
} from 'react-relay';

import {
    RelayNetworkLayer,
    urlMiddleware,
    batchMiddleware,
  } from 'react-relay-network-layer';

Relay.injectNetworkLayer(new Relay.DefaultNetworkLayer('http://192.168.0.2:5000/graphql'));

class UserRoute extends Route {
    static paramDefinitions = {
        userID: { required: true }
    }
    static queries = {
        user: () => Relay.QL`
        query { 
            user(id: $userID)
        }
        `
    }
    static routeName = 'UserRoute'
}

class UserInfo extends Component {
    render () {
      const user = this.props.user
      return (
        <Text>email: {user.email}</Text>
      )
    }
  }
  
  UserInfo = Relay.createContainer(UserInfo, {
    fragments: {
      user: () => Relay.QL`
        fragment on User {
          id,
          email
        }
      `
    }
  })

  class RelayApp extends Component {
    render () {
      return (
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Welcome to React Native!
          </Text>
          <Text style={styles.instructions}>
            To get started, edit index.ios.js
          </Text>
          <Text style={styles.instructions}>
            Press Cmd+R to reload,{'\n'}
            Cmd+D or shake for dev menu
          </Text>
          <RootContainer
            Component={UserInfo}
            route={new UserRoute({userID: '1'})}
            renderFetched={(data) => <UserInfo {...this.props} {...data} />}
          />
        </View>
      )
    }
  }

AppRegistry.registerComponent('StqPublicidadeChallenge', () => RelayApp);

//AppRegistry.registerComponent('StqPublicidadeChallenge', () => __DEV__ ? StorybookUI : App);