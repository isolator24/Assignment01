import React from 'react';
import { Alert, Button, View, Text, FlatList, StyleSheet, TouchableHighlight} from 'react-native';

export default class Assignment03 extends React.Component {

  state = {
    familyData: []
  }

  componentDidMount() {
    const familyDatas = require('../../data/familyData.json').familyDatas;
    this.setState({familyDatas});
  }
//  componentWillMount() {
//    console.log('Hello world');
//    fetch('../data/familyData.json')
//     .then(response => response.json())
//     .then((responseData) => {
//       console.log(responseData);
//     }).catch(function(error) {
//       console.log('There has been a problem')
//       throw error;
//     });
//  }

  render() {
    return (
      <View styles={styles.container}>
          <Text>Flat List Sample</Text>

          <FlatList
            data={this.state.familyDatas}
            //renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
            renderItem={({item, separators}) => (
              <TouchableHighlight
                onPress={() => this._onPress(item)}
                onShowUnderlay={separators.highlight}
                onHideUnderlay={separators.unhighlight}>
                <View >
                  <Button title={item.name}
                          onPress={() => this.props.navigation.navigate('Landing', {
                            all: item
                          })}
                  />
                </View>
              </TouchableHighlight>
            )}
          />

 

      </View>
    );

  }
}

const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 22
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
  })