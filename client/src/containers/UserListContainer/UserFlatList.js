import React, { Component } from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import { List, ListItem } from "react-native-elements";
import Relay from 'react-relay/classic';
import Header from '../../components/Header';

class UserFlatList extends Component {    
    renderSeparator = () => {
        return (
          <View
            style={{
              height: 1,
              width: "86%",
              backgroundColor: "#CED0CE",
              marginLeft: "14%"
            }}
          />
        );
    };

    render() {
        return (
            <View>
                <Header>Lista de Usuários</Header>
                <List containerStyle={{marginTop:0, borderTopWidth: 0, borderBottomWidth: 0 }}>
                    <FlatList
                        data={this.props.users.edges}
                        renderItem={({ item }) => (

                        <ListItem
                            title={item.node.name}
                            subtitle={item.node.id}                            
                            containerStyle={{ borderBottomWidth: 0 }}
                            leftIcon={{name: 'av-timer'}}
                        />

                        )}
                        keyExtractor={item => item.node.id}
                        ItemSeparatorComponent={this.renderSeparator}
                    />
                </List>
            </View>
        );
    }
}

export default Relay.createContainer(UserFlatList, {
    initialVariables: {
      first: 4,
    },
    fragments: {
      users: variables => Relay.QL`
        fragment on UserConnection {
            edges {
                node {
                  id
                  name
                }
            }
        }
      `,
    },
  });