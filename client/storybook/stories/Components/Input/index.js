import React, {Component} from 'React';
import { Grid, Col, Row, Icon, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';

export default function Input(props) {
    return (
        <Grid>
            <Row size={1}>
                <Col size={1} containerStyle={Style.colIconStyle}>
                    <Icon
                        reverse
                        name='ios-american-football'
                        type='ionicon'
                        color='#517fa4'
                        />
                </Col>
                <Col size={5}>
                    <FormLabel>Usuário</FormLabel>
                    <FormInput />
                    <FormValidationMessage></FormValidationMessage>
                </Col>
            </Row>
        </Grid>
    );
};

const Style = {
    colIconStyle: {
        justifyContent: 'center', 
        alignItems: 'center'
    }
}