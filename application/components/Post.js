import React from 'react';
import { Button, View, Text, TouchableOpacity } from 'react-native';


class Post extends React.Component {
    constructor(props) {
     super(props)
     }
    render() {
     return (
     <TouchableOpacity style={styles.postContainer} onPress={this.props.postPressed}>
     <View style={styles.userInformations}>
     <Image source={{uri: 'https://www.google.com.ph/search?q=car&source=lnms&tbm=isch&sa=X&ved=0ahUKEwi-g-3V4v_cAhXRfCsKHRNLCjsQ_AUICigB&biw=2135&bih=1050#imgrc=0PfWXQDHcKB3zM:'}}/>
     <Text>this.props.post.userName</Text>
     </View>
     <Text style={styles.status}>this.props.post.thoughts</Text></TouchableOpacity>
     )
     }
    }
    export default Post