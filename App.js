import React from 'react';
import { Button, View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation'; // Version can be specified in package.json
import Post from './components/Post.js';
import HomeScreen from './components/HomeScreen.js';
import DetailsScreen from './components/DetailsScreen.js';
import MyCustomScreen from './components/MyCustomScreen.js';



DetailsScreen

MyCustomScreen

const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Details: {
      screen: DetailsScreen,
    },
    Custom: {
      screen: MyCustomScreen,
    },
  },
  {
    initialRouteName: 'Home',

    navigationOptions: {
    
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}