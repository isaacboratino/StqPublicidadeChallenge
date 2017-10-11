import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import { Button, Card } from 'react-native-elements';
import {ColorsConfig} from './../../Configs';
import Title from '../../Components/Title';
import Spinner from '../../Components/Spinner';
import Header from '../../Components/Header';
import Input from '../../Components/Input';

export default class LoginContainer extends Component {

  onEntrarClick() {
    this.props.loading = true;
  }

  renderButton() {
    if (this.props.loading) {
      return (<Spinner size='large'></Spinner>);
    }

    return (
      <Button title='Entrar' 
        backgroundColor={ColorsConfig.primaryColor}
        onPress={this.onEntrarClick.bind(this)}></Button>
    );
  }

  render() {
      return (
        
        <View>
          <Header>STQ Publicidade</Header>
          <ScrollView style={styles.containerStyle}>

            <Card>
              
              <Title>Login</Title>

              <Input></Input>
              
              <Input></Input>

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
    paddingHorizontal: 0,
    paddingVertical: 0,
    paddingTop: 10,
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