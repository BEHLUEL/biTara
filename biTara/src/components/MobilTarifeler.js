import React, { Component } from 'react';
import { Text, Button, View } from 'react-native';
//import Card from '../ortak/Card';
//import CardSection from '../ortak/CardSection';


class MobilTarifeler extends Component {
    clickLogin() {

    }
    render() {
        return (
         <View style={{ backgroundColor: '#002233' }}>
           <View style={styles.containerStyle}>
                <View>
                    <Text style={styles.headerStyle}>{} tarife adı</Text>
                </View>
                <View style={styles.subContainerStyle}>
                    <Text>Dakika: {}</Text>
                    <Text>SMS: {}</Text>
                    <Text>İnternet: {} GB</Text>
                    <Text>Tarife Çeşidi: {}</Text>
                    <View style={{ textAlign: 'center', margin: 12 }}>
                    <Text style={{ textAlign: 'center', fontSize: 22 }}>Fiyat: {} TL</Text>                        
                    </View>      

            <Button style={{ marginTop: 10 }} color="#00CCEE" onPress={this.clickLogin.bind(this)} title='Görüntüle' />
            </View>
            </View>  
          </View>        
        );
    }
}

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
      subContainerStyle: {
        fontSize: 18,
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

export default MobilTarifeler;
