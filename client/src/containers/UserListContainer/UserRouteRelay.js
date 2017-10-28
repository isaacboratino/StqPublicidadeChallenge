import Relay, {Route} from 'react-relay/classic';
  
export default class UserRouteRelay extends Route {
    static paramDefinitions = {
        first: {required: true},
    };
    static queries = {
        users: () => Relay.QL`query { users(first: $first) }`,
    };
    static routeName = 'UserRouteRelay';
}