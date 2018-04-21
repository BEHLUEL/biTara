import React, { Component } from 'react';
import { Alert, AppRegistry, Button, StyleSheet, View, Text } from 'react-native';

class GirisSayfasi extends Component {
  _onPressButton() {
    Alert.alert('You tapped the button!');
  }

  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.welcome}>biTara
        </Text>
        <View style={styles.buttonContainer}>
          <Button
           
            title="Mobil"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="İnternet"
            color="#841584"
          />
        </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
  },
  buttonContainer: {
    margin: 10
  },
  welcome: {
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

export default GirisSayfasi;
