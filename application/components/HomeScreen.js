import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

class HomeScreen extends React.Component {

  static navigationOptions = {
    title: 'Home',
    headerTitle: 'Home',
    headerBackImage: null,
    headerRight: true,
  };

  render() {
    return (
      
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Welcome to React Native tutorial</Text>
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
         <Button
          title="My Assignments"
          onPress={() => this.props.navigation.navigate('Assignment')}
        />
        <Text style={testStyles.container}>Positive 100</Text>
      </View>
    );
  }
}

const testStyles = StyleSheet.create(
{
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen