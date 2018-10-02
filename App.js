import { StackNavigator} from 'react-navigation'; // Version can be specified in package.json
import HomeScreen from './components/HomeScreen.js';
import DetailsScreen from './components/DetailsScreen.js';
import MyCustomScreen from './components/MyCustomScreen.js';
import AssignmentScreen from './components/Assignments/AssignmentScreen.js';
import Assignment01 from './components/Assignments/Assignment01.js';
import Assignment02 from './components/Assignments/Assignment02.js';
import Assignment03 from './components/Assignments/Assignment03.js';
import Assignment04 from './components/Assignments/Assignment04.js';
import Assignment05 from './components/Assignments/Assignment05.js';
import LandingScreen from './components/Assignments/LandingScreen.js';
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
    Assignment: {
      screen: AssignmentScreen,
    },
    Assignment01: {
      screen: Assignment01,
    },
    Assignment02: {
      screen: Assignment02,
    },
    Assignment03: {
      screen: Assignment03,
    },
    Assignment04: {
      screen: Assignment04,
    },
    Assignment05: {
      screen: Assignment05,
    },
    Landing: {
      screen: LandingScreen,
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

console.disableYellowBox = true;
//AppRegistry.registerComponent('AwesomeProject', () => Bananas);