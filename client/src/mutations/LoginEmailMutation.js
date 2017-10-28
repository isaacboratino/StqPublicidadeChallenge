import Relay, {
    Route,
  } from 'react-relay/classic';

export default class LoginEmailMutation extends Relay.Mutation<Props> {
    
  static fragments = {
    LoginEmail: () => Relay.QL`
      fragment on LoginEmailPayload {
        clientMutationId,
        token,
        error
      }
    `,
  };

    getMutation() {
      return Relay.QL`mutation {LoginEmail}`;
    }
    
    getFatQuery() {
      return Relay.QL`
        fragment on LoginEmailPayload @relay(pattern: true) {
            token,
            error,
            clientMutationId
        }
      `;
    }

    getConfigs() {
      return [{
        type: 'FIELDS_CHANGE',
        fieldIDs: {
          token: null,
          clientMutationId: null,
          error: null
        },
      },{
        type: 'REQUIRED_CHILDREN',
        children: [
          Relay.QL`
          fragment on LoginEmailPayload {
            token,
            error,
            clientMutationId
          }
        `]
      }];
    } 

    getVariables() {
      return {
          clientMutationId: this.props.clientMutationId,
          email: this.props.email,
          password: this.props.password      
      };
    }                       

    getOptimisticResponse() {
      return {
        input:{
          clientMutationId: this.props.clientMutationId,
          email: this.props.email,
          password: this.props.password 
        }        
      };
    }
  }