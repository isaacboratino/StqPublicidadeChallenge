import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Relay, {
  DefaultNetworkLayer,
  RootContainer,
} from 'react-relay/classic';

import { Text, View, ScrollView } from 'react-native';
import { Button, Card } from 'react-native-elements';

import {ColorsConfig, GlobalVariablesConfig} from '../../configs';
import Title from '../../components/Title';
import Spinner from '../../components/Spinner';
import Header from '../../components/Header';
import Input from '../../components/Input';

import LoginEmailMutation from '../../mutations/LoginEmailMutation';

Relay.injectNetworkLayer(
  new DefaultNetworkLayer(GlobalVariablesConfig.urlServerGraphQL)
);

export default class LoginContainer extends Component {  
  static navigationOptions = {
    title: '',
    header: null
  } 

  constructor() {
    super();
    this.state = {
      userError: {code: '', message:''},
      keyError: {code: '', message:''},
      LoginEmail: {token:''}
    }
    this.tryLogin = this.tryLogin.bind(this);
    this.tryLoginSuccess = this.tryLoginSuccess.bind(this);
    this.validateForm = this.validateForm.bind(this);
  }

  tryLogin() {
    this.props.loading = true;
    if (this.validateForm()) {

      Relay.Store.commitUpdate(
        new LoginEmailMutation({
          clientMutationId: 'abc',
          email: this.userInput._lastNativeText,
          password: this.keyInput._lastNativeText}), 
          {onSuccess: this.tryLoginSuccess});

    }    
  }

  tryLoginSuccess(response) {
    this.props.loading = false;
    if (response.LoginEmail) {
      GlobalVariablesConfig.token = response.LoginEmail.token;
      this.props.navigation.navigate('RestrictedArea');
    }    
  }

  validateForm() {
    this.setState({userError: {code: '', message:''}});
    this.setState({keyError: {code: '', message:''}});

    let formIsValid = true;

    if (this.userInput._lastNativeText === undefined || this.userInput._lastNativeText.trim().length < 1) {
      this.setState({userError: {code: '', message:'Usuario obrigatório'}});
      formIsValid = false;
    }

    if (this.keyInput._lastNativeText === undefined || this.keyInput._lastNativeText.trim().length < 1) {
      this.setState({keyError: {code: '', message:'Senha obrigatória'}});
      formIsValid = false;
    }

    return formIsValid;

  }

  renderButton() {
    if (this.props.loading) {
      return (<Spinner size='large'></Spinner>);
    }

    return (
      <Button title='Entrar' 
        backgroundColor={ColorsConfig.primaryColor}
        onPress={this.tryLogin}></Button>
    );
  }

  render() {
      return (        

        <View style={styles.viewStyle}>
          <Header>STQ Publicidade</Header>
          <ScrollView style={styles.containerStyle}>

            <Card>
              
              <Title>Login</Title>

              <Input 
                inputRef={input => this.userInput = input}
                label='Usuário'
                icon={{reverse:true, name:'user', type:'font-awesome', color:'#517fa4'}}
                error={this.state.userError}></Input>
              
              <Input 
                inputRef={input => this.keyInput = input}
                label='Senha'
                secureTextEntry={true} 
                icon={{reverse:true, name:'key', type:'font-awesome', color:'#517fa4'}}
                error={this.state.keyError}></Input>

              <Title>
                {this.props.error}
              </Title>

              {this.renderButton()}

            </Card>

        </ScrollView>
      </View>
    );
  }
}

const styles = {
  viewStyle: {
    paddingTop: 0,
    marginTop:0
  },
  containerStyle: {
    paddingHorizontal: 0,
    paddingVertical: 0,
    paddingTop: 10,
  },
  cardStyle: {
    paddingVertical: 10
  }
};

LoginContainer.defaultProps = {
  user: null, 
  password: null,
  error: null,
  loading: false
};

LoginContainer.propTypes = {
  user: PropTypes.string, 
  password: PropTypes.string,
  error: PropTypes.string,
  loading: PropTypes.bool
};