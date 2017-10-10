import React, { Component } from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { Button, Card } from 'react-native-elements';
import { InputIcon, Title, Spinner, Header } from './../../Components';

export default class LoginContainer extends Component {

  onEntrarClick() {
    this.props.loading = true;
  }

  renderButton() {
    if (this.props.loading) {
      return (<Spinner size="large"></Spinner>);
    }

    return (
      <Button onPress={this.onEntrarClick.bind(this)}>ENTRAR</Button>
    );
  }

  render() {
      return (
        
        <View>
          <Header>STQ Publicidade</Header>
          <ScrollView style={styles.containerStyle}>

          <Card>
            
            <Title>Login</Title>

            <InputIcon
              placeholder=''
              label='Usuario'
              value={this.props.user}
            />

            <InputIcon
                secureTextEntry
                placeholder=""
                label="Senha"
                value={this.props.password}
              />

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
  containerStyle: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    paddingTop: 20,
  }
};

LoginContainer.defaultProps = {
  user: null, 
  password: null,
  error: null,
  loading: false
};

LoginContainer.propTypes = {
  user: PropTypes.text, 
  password: PropTypes.text,
  error: PropTypes.text,
  loading: PropTypes.bool
};