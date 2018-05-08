import React, { Component } from 'react';
import { Alert, Button, StyleSheet, View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

class GirisSayfasi extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.welcome}>biTara
        </Text>
        <View style={styles.buttonContainer}>
          <Button
            title="MOBİL"
            onPress={Actions.mobilkisitsayfasi}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="İNTERNET"
            color="#841584"
            onPress={Actions.internetkisitsayfasi}
          />
        </View>
        
      </View>
    );
  };
};

const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
      backgroundColor: '#F4F6F9'
  },

  buttonContainer: {
    margin: 10
  },

  welcome: {
    color: '#14153A',
    fontSize: 60,
    textAlign: 'center',
    margin: 30,
    marginBottom: 70,
  },

  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

// skip this line if using Create React Native 
export default GirisSayfasi;
