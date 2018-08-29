import React from 'react';
import { Button, View, Text } from 'react-native';

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


  export default MyCustomScreen