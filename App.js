import {StackNavigator} from 'react-navigation'; // Version can be specified in package.json
import HomeScreen from './components/HomeScreen.js';
import DetailsScreen from './components/DetailsScreen.js';
import MyCustomScreen from './components/MyCustomScreen.js';
import React, { Component } from 'react';
import EventList from './components/Events/EventList.js';

HomeScreen

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

//AppRegistry.registerComponent('AwesomeProject', () => Bananas);