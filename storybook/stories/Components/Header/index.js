import React from 'react';
import ReactNative, { Text, View, Image } from 'react-native';
import PropTypes from 'prop-types';

export default function Header(props) {
  return (
    <View style={Style.viewStyle}>
      <Image source={{uri:'./header_logo.PNG'}}
             style={Style.imageStyle}
             resizeMode='contain'></Image>
      <Text style={Style.textStyle}>{props.children}</Text>
    </View>
  );
};

const Style = {
  viewStyle: {
    backgroundColor: '#0B253E',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 60,
    marginTop: ReactNative.Platform.OS === 'ios' ? 20 : 0,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    flexDirection: 'row',
    position: 'relative'
  },
  textStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF'
  },
  imageStyle: {
    marginHorizontal: 10,
    width: 40
  }
}

Header.defaultProps = {
  children: null,
};

Header.propTypes = {
  children: PropTypes.node
};