import React, {Component} from 'React';
import PropTypes from 'prop-types';
import { Grid, Col, Row, Icon, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';

export default function Input(props) {        

    this.state = {error: props.error || {}};

    errorHandler = (code, message) => {
        this.state = {
            error: !code ? null :
            {
                code,
                message,
            }
        }
    }

    return (
        <Grid>     
            {props.icon === undefined ? (
            <Col size={5}>
                <FormLabel>{props.label}</FormLabel>
                <FormInput textInputRef={props.inputRef} {...props} />
                <FormValidationMessage>{this.state.error.message}</FormValidationMessage>
            </Col>
            ) : (
            <Row size={1}>
                <Col size={1} containerStyle={Style.colIconStyle}>
                    <Icon {...props.icon}  />
                </Col>
                <Col size={5}>
                    <FormLabel>{props.label}</FormLabel>
                    <FormInput textInputRef={props.inputRef} shake={this.state.error} {...props} />
                    <FormValidationMessage>{this.state.error.message}</FormValidationMessage>
                </Col>
            </Row>
            )}            
        </Grid>
    );
};

const Style = {
    colIconStyle: {
        justifyContent: 'center', 
        alignItems: 'center'
    }
}

Input.propTypes = {
    icon: PropTypes.object,
    label: PropTypes.string.required
};