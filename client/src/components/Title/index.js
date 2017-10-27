import React from 'react';
import {Text} from 'react-native';
import PropTypes from 'prop-types';
import {ColorsConfig} from '../../configs';

export default function Title(props) {
  return (
    <Text style={Style.textStyle}>
      {props.children}
    </Text>
  );
};

const Style = {
  textStyle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: ColorsConfig.title.text,
    marginBottom: 10
  }
};

Title.defaultProps = {
  children: null
};

Title.propTypes = {
  children: PropTypes.node
};