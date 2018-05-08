import React, { Component } from 'react';

import { Text, Button, ScrollView, View } from 'react-native';
//import Card from '../ortak/Card';
//import CardSection from '../ortak/CardSection';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import RadioButton from 'react-native-radio-button';
//import internetAra from '../actions/internetKisitActions';


class InternetTarifeler extends Component {
    clickLogin() {
        Actions.internetayrinti();
    }
    render() {
        return (
         <ScrollView style={{ backgroundColor: '#F4F6F9' }}>
           
          </ScrollView>        
        );
    };
};

const styles = {
    
};

const mapToStateProps = ({ internetResponse }) => {
  const { tumu,
      turktelekom,
      superonline,
      kablonet,
      turknet,
      saglayicilar,
      limit,
      hiz,
      gb,
      tv,
      tel,
      yalin,
      taahhut } = internetResponse;

  return {
      tumu,
      turktelekom,
      superonline,
      kablonet,
      turknet,
      saglayicilar,
      limit,
      hiz,
      gb,
      tv,
      tel,
      yalin,
      taahhut
  };
};
//export default InternetKisitSayfasi;
export default connect(mapToStateProps, { })(InternetTarifeler);
