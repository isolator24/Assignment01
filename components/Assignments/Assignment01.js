import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

export default class Assignment01 extends React.Component {

  constructor(props) {
    super(props);
    this.state = { isLoggedIn : false};
  }

  toggleUser = ()=> {
    this.setState(previousSate =>{
      return { isLoggedIn: !previousSate.isLoggedIn };
    });
  }

  render() {
    let display = this.state.isLoggedIn ? 'Anthony Wong' : this.props.message;

    return (
      <View>
          <Text onPress={this.toggleUser}>{display}</Text>
      </View>
    );

  }
}