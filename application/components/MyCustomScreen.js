import React, { Component } from 'react';
import { AppRegistry, Image, Button, View, Text, TouchableOpacity } from 'react-native';

class Greeting extends React.Component {
    render() {
      return (
        <Text>Hello {this.props.name}!</Text>
      );
    }
  }

  class MyButton extends React.Component {
      render() {
          return (
              <View>
                  <Text>{this.props.label}</Text>
              </View>
          )
      }
  }


  class Blink extends Component {
      constructor(props) {
          super(props);
          this.state = { isShowingText: true};
          
          setInterval(() => {
              this.setState(previousState => {
                  return { isShowingText: ! previousState.isShowingText };
              });
          }, 1000);
      }

      render() {
          let display = this.state.isShowingText ? this.props.text : ' ';
          return (
                <Text>{display}</Text>
          );
      }
  }
  
class DummyButton extends React.Component {
    state = { 
        text: 'Change the component value'
    }

    updateButtonText = () => this.setState({ text: 'Success'})

    render() {
        return (
            <View>
                <Text onPress = {this.updateButtonText}>{this.state.text}</Text>
            </View>
        );
    }
}

class MyCustomScreen extends React.Component {
    render () {
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
          };
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>My Custom Screen</Text>
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

        <Greeting name='Rexxar' />
        <Greeting name='Jaina' />
        <Greeting name='Valeera' />

        
        
        <Blink text='I love to blink' />

        <TouchableOpacity>
            <MyButton label="Press me!" />
        </TouchableOpacity>

        <DummyButton/>
        </View>
      );
    }
  }
//<Image source={pic} style= {{ width: 193, height: 110}}/>


  export default MyCustomScreen