import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';

export default function Spinner(props) {
  return (
    <View style={Style.spinnerStyle}>
      <ActivityIndicator size={props.size} />
    </View>
  );
};

const Style = {
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
};

Spinner.defaultProps = {
  size: 'large'
};

Spinner.propTypes = {
  size: PropTypes.string
};