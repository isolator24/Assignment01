import React from 'react';
import { Animated, Button, View, Text, StyleSheet, ScrollView } from 'react-native';

export default class Assignment01 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            fadeOut: new Animated.Value(10),
            leftPostion: new Animated.Value(2000)
        };
    }

//   toggleUser = ()=> {
//     this.setState(previousSate =>{
//       return { isLoggedIn: !previousSate.isLoggedIn };
//     });
//   }

  render() {

    const { params } = this.props.navigation.state;
    const all = params ? params.all : null;
    
    return (
      <ScrollView>
        <Animated.View style={styles.rowStyle}>
                    <Text style={styles.listRowLabel}>Name:</Text>
                    <Text style={styles.listRowContent}>
                        {params.all.name}
                    </Text>
        </Animated.View>
        <View style={styles.rowStyle}>
                    <Text style={styles.listRowLabel}>Family Name:</Text>
                    <Text style={styles.listRowContent}>
                        {params.all.surname}
                    </Text>
        </View>
        <View style={styles.rowStyle}>
                    <Text style={styles.listRowLabel}>Age:</Text>
                    <Text style={styles.listRowContent}>
                        {params.all.age}
                    </Text>
        </View>
        <View style={styles.rowStyle}>
                    <Text style={styles.listRowLabel}>Sex:</Text>
                    <Text style={styles.listRowContent}>
                        {params.all.sex}
                    </Text>
        </View>
        <View style={styles.rowStyle}>
                    <Text style={styles.listRowLabel}>Occupation:</Text>
                    <Text style={styles.listRowContent}>
                        {params.all.occupation}
                    </Text>
        </View>
        <View style={styles.rowStyle}>
                    <Text style={styles.listRowLabel}>Hobby:</Text>
                    <Text style={styles.listRowContent}>
                        {params.all.hobbies}
                    </Text>
        </View>     
        <View style={styles.rowStyle}>
                    <Text style={styles.listRowLabel}>Height:</Text>
                    <Text style={styles.listRowContent}>
                        {params.all.height}
                    </Text>
        </View>    
        <View style={styles.rowStyle}>
                    <Text style={styles.listRowLabel}>Primary School:</Text>
                    <Text style={styles.listRowContent}>
                        {params.all.primary}
                    </Text>
        </View>   
        <View style={styles.rowStyle}>
                    <Text style={styles.listRowLabel}>Secondary School:</Text>
                    <Text style={styles.listRowContent}>
                        {params.all.secondary}
                    </Text>
        </View>   
        <View style={styles.rowStyle}>
                    <Text style={styles.listRowLabel}>Tertiary:</Text>
                    <Text style={styles.listRowContent}>
                        {params.all.tertiary}
                    </Text>
        </View>
        <View style={styles.rowStyle}>
                    <Text style={styles.listRowLabel}>Citizenship:</Text>
                    <Text style={styles.listRowContent}>
                        {params.all.citizenship}
                    </Text>
        </View>   
        <View style={styles.rowStyle}>
                    <Text style={styles.listRowLabel}>Home Number:</Text>
                    <Text style={styles.listRowContent}>
                        {params.all.homeNumber}
                    </Text>
        </View>   
        <View style={styles.rowStyle}>
                    <Text style={styles.listRowLabel}>Mobile Number:</Text>
                    <Text style={styles.listRowContent}>
                        {params.all.mobileNumber}
                    </Text>
        </View>   
        <View style={styles.rowStyle}>
                    <Text style={styles.listRowLabel}>Address:</Text>
                    <Text style={styles.listRowContent}>
                        {params.all.address}
                    </Text>
        </View> 
        <View style={styles.rowStyle}>
                    <Text style={styles.listRowLabel}>Zip Code:</Text>
                    <Text style={styles.listRowContent}>
                        {params.all.zip}
                    </Text>
        </View> 
        <View style={styles.rowStyle}>
                    <Text style={styles.listRowLabel}>Dream:</Text>
                    <Text style={styles.listRowContent}>
                        {params.all.dream}
                    </Text>
        </View> 
        <View style={styles.rowStyle}>
                    <Text style={styles.listRowLabel}>Is Healthy:</Text>
                    <Text style={styles.listRowContent}>
                        {params.all.isHealthy}
                    </Text>
        </View>                               


      </ScrollView>
    );

  }
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        flexDirection: "column"
    },
    rowStyle: {
        flexDirection: "row",
        padding: 10
    },
    listRowLabel: {
        paddingRight: 10,
        width: 110
    },
    listRowContent: {
        flex: 1
    },
    dateRowStyle: {
        flexDirection: "row",
        padding: 10,
        height: 200
    },
    headerStyle: {
        backgroundColor: "#2196F3"
    },
    headerButtonStyle: {
        color: "#FFFFFF",
        padding: 20
    }
});