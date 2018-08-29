import React from 'react';
import { Button, View, Text } from 'react-native';

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