import React from 'react';
import { Button, View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation'; // Version can be specified in package.json
import Post from './components/Post.js'


class HomeScreen extends React.Component {

  static navigationOptions = {
    title: 'Home',
  };

  render() {
    return (

      
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => {
            this.props.navigation.navigate('Details', { 
              itemId: 86,
              otherParam: 'First parameter',
            });
        }}
        />
        <Button
          title="Go to My Custom Screen"
          onPress={() => this.props.navigation.navigate('Custom')}
        />
        
        
      </View>


    );
  }
}

class DetailsScreen extends React.Component {

  static navigationOptions = ({ navigation }) => {
  return {
    title: navigation.getParam('otherParam', ' A Nested Details Screen'),
  };

  };


  render() {

    const { navigation } = this.props;
    const itemId = navigation.getParam('itemId','No-ID');
    const otherParam = navigation.getParam('otherParam', 'some default value')

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
        <Button
          title="Go to Details... again"
          onPress={() => this.props.navigation.push('Details', {
          itemId: Math.floor(Math.random() * 100),
          })}
        />
        <Button
          title="Update the title"
          onPress= {
            () => this.props.navigation.setParams({ otherParam: 'Updated!'})
          }
          />
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go to My Custom screen"
          onPress={() => this.props.navigation.navigate('Custom')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

class MyCustomScreen extends React.Component {
  render () {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>My Custom Screen</Text>
        <Button
          title="Go to Custom... again"
          onPress={() => this.props.navigation.push('Custom')}
        />
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.push('Details')}
        />
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

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