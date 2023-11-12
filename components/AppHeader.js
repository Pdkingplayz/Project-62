import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class AppHeader extends React.Component{
  render(){
    return(
      <View style= {styles.textContainer}>
        <Text style={styles.text}>CLASS ATTENDANCE</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textContainer:{
    backgroundColor: '#FF5733',
  },
  text:{
    color: 'white',
    padding: 15,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop:15
  }
});