import React from 'react';
import ReactNative, { Text, View, Image } from 'react-native';
import {Icon} from 'react-native-elements';
import PropTypes from 'prop-types';
import {ColorsConfig} from './../../Configs';

export default function Header(props) {
  return (
    <View style={Style.viewStyle}>
      <Icon
        containerStyle={Style.imageStyle}
        name='ios-home'
        type='ionicon'
        color='#FFF'
        />
      <Text style={Style.textStyle}>{props.children}</Text>
    </View>
  );
};

const Style = {
  viewStyle: {
    backgroundColor: ColorsConfig.header.background,
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 60,
    marginTop: ReactNative.Platform.OS === 'ios' ? 20 : 0,
    shadowColor: ColorsConfig.header.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    flexDirection: 'row',
    position: 'relative'
  },
  textStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: ColorsConfig.header.title
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