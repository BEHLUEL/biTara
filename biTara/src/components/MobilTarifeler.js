import React, { Component } from 'react';
import { Text, Button, View } from 'react-native';
//import Card from '../ortak/Card';
//import CardSection from '../ortak/CardSection';


class MobilTarifeler extends Component {
    clickLogin() {

    }
    render() {
        return (
           <View style={styles.containerStyle}>
                <View>
                    <Text>{} tarife adı</Text>
                </View>
                <View style={styles.containerStyle}>
                    <Text>Dakika: {}</Text>
                    <Text>SMS: {}</Text>
                    <Text>İnternet: {} GB</Text>
                    <Text>Tarife Çeşidi: {}</Text>
                    <View>
                   <Text>Fiyat: {} TL</Text>                        
                    </View>      

            <Button onPress={this.clickLogin.bind(this)} title='Görüntüle' />
            </View>
            </View>  
                  
        );
    }
}

const styles = {

    containerStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
    
      },
      subContainerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'
      },
};

export default MobilTarifeler;
