/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import GirisSayfasi from './src/components/GirisSayfasi';
import MobilTarifeler from './src/components/MobilTarifeler';
import InternetTarifeler from './src/components/InternetTarifeler';
import MobilAyrinti from './src/components/MobilAyrinti';
import InternetAyrinti from './src/components/InternetAyrinti';


export default class App extends Component {
  componentDidMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyC2Bj8J3_9flr65m9knmLsxrxMdlZSMQqo',
      authDomain: 'bitara-84874.firebaseapp.com',
      databaseURL: 'https://bitara-84874.firebaseio.com',
      projectId: 'bitara-84874',
      storageBucket: 'bitara-84874.appspot.com',
      messagingSenderId: '492432044814'
    });
    
    var database = firebase.database();
  };
  
  render() {
    return (
      <View style={styles.container}>
        <InternetAyrinti />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: '#002233',
  },
  
});
