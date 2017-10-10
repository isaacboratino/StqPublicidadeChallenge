import React from 'react';
import ReactNative, { TextInput, View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';
import {ColorsConfig} from './../../Configs';

export default function InputIcon(props) {

  return (
    <View style={Style.containerStyle}>

      <Image source={icon} style={Style.imageStyle} resizeMode='contain'></Image>

      <View style={Style.textContainerStyle}>
        <Text style={Style.labelStyle}>{label}</Text>
        <TextInput
          secureTextEntry={props.secureTextEntry}
          placeholder={props.placeholder}
          autoCorrect={false}
          style={Style.inputStyle}
          value={props.value}
          editable={props.isEditable}
        />

      </View>
    </View>
  );
};

const Style = {
  inputStyle: {
    color: ColorsConfig.input.text,
    fontSize: 18,
    lineHeight: 23,
    borderColor: ColorsConfig.input.border,
    borderBottomWidth: ReactNative.Platform.OS === 'ios' ? 1 : 0,
    alignSelf: 'stretch',
    flex: 1,
  },
  labelStyle: {
    color: ColorsConfig.input.label,
    fontSize: 14,
    flex: 1,
  },
  textContainerStyle: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    alignSelf: 'stretch',
    flex: 1,
  },
  containerStyle: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    flex: 1,
  },
  imageStyle: {
    width:40,
    height:40,
    margin: 10,
    alignSelf: 'center',
  }
};

InputIcon.defaultProps = {
  label: null, 
  value: null, 
  placeholder: null, 
  secureTextEntry: null, 
  icon: null, 
  isEditable: null
};

InputIcon.propTypes = {
  label: PropTypes.string.isRequired, 
  value: PropTypes.string, 
  placeholder: PropTypes.string, 
  secureTextEntry: PropTypes.string, 
  icon: PropTypes.object.isRequired, 
  isEditable: PropTypes.bool
};