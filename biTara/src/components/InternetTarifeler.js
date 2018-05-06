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

    }
    render() {
        return (
         <ScrollView style={{ backgroundColor: '#002233' }}>
           <View style={styles.containerStyle}>
           <View style={styles.containerHeaderStyle}>
                <Text style={{ color: 'white', fontSize: 35 }}>{} Sağlayıcı {this.props.gb}</Text>
           </View>
                <View>
                    <Text style={styles.headerStyle}>{} tarife adı</Text>
                </View>
                <View style={styles.subContainerStyle}>
                    <Text>Hız: {}</Text>
                    <Text>Limit: {}</Text>
                    <Text>Taahhüt: {} </Text>
                    <View style={{ margin: 12 }}>
                    <Text style={{ textAlign: 'center', fontSize: 22 }}>Fiyat: {} TL</Text>                        
                    </View>      
            <View style={{ marginBottom: 2 }} >
            <Button style={{ marginTop: 10, marginBottom: 10 }} color="#00CCEE" onPress={this.clickLogin.bind(this)} title='Görüntüle' />              
            </View>
            </View>
            </View>  
          </ScrollView>        
        );
    };
};

const styles = {
    containerStyle: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#ddd',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 1,
        margin: 10,
      },

      containerHeaderStyle: {
        margin: 10,
        backgroundColor: '#002233',
      },

      subContainerStyle: {
        borderBottomWidth: 0,
        padding: 4,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        //flexDirection: 'row',
        borderColor: '#fff',
        position: 'relative',
      },
      
      headerStyle: {
        color: '#00CCEE',
        backgroundColor: '#fff',
        textAlign: 'center',
        fontSize: 37,
      }
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
