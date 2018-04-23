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


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MobilAyrinti />
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
