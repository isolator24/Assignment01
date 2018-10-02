import React from 'react';
import { Button, View, Text } from 'react-native';
//import {StackNavigator} from 'react-navigation';
import Header from '../../utility/Header.js';


export default class AssignmentScreen extends React.Component {
    render() {
      return (
        <View>
          <Header message = 'Press to Login' />
          <Button
            title="Assignment 1"
            onPress={() => this.props.navigation.navigate('Assignment01')}
          />
          <Button
            title="Assignment 2"
            onPress={() => this.props.navigation.navigate('Assignment02')}
          />
            <Button
            title="Assignment 3"
            onPress={() => this.props.navigation.navigate('Assignment03')}
          />
            <Button
            title="Assignment 4"
            onPress={() => this.props.navigation.navigate('Assignment04')}
          />
            <Button
            title="Assignment 5"
            onPress={() => this.props.navigation.navigate('Assignment05')}
          />
        </View>
      );

    }
  }

// const AssignmentStack = StackNavigator(
//     {
//       Assignment01: {
//         screen: Assignment01,
//       }
//     },
//     {
//       initialRouteName: 'Assignment01',
  
//       navigationOptions: {
//         headerStyle: {
//           backgroundColor: '#f4511e',
//         },
//         headerTintColor: '#fff',
//         headerTitleStyle: {
//           fontWeight: 'bold',
//         },
//       }
//     }
//   );

