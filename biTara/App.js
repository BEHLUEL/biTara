/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import firebase from 'firebase';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import reducers from './src/reducers';
import Router from './Router';


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
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    
    return (

      <Provider store={store}>
        <View style={styles.container}>
          <Router />
        </View>
      </Provider>
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
