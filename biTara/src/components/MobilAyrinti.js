import React, { Component } from 'react';
import { View, ScrollView, Text } from 'react-native';

class MobilAyrinti extends Component {
    render() {
        console.log('data geliyor mu acepa:' + this.props.tarife);
        
        return (
            <ScrollView>
            <View >
            <Text style={styles.headerTextStyle}> Tarife Adı {this.props.tarife.Ad} </Text>
            </View>
            <View style={styles.bodyStyle}>
                <Text style={styles.bodyFontStyle} >Operatör: {this.props.tarife.Operator}</Text>
                <Text style={styles.bodyFontStyle}>Dakika: {this.props.tarife.Dakika} dk</Text>
                <Text style={styles.bodyFontStyle}>SMS: {this.props.tarife.Sms}</Text>
                <Text style={styles.bodyFontStyle}>İnternet: {this.props.tarife.Internet} GB</Text>
                <Text style={styles.bodyFontStyle}>Tarife Türü: {this.props.tarife.Tur}</Text>
                <Text style={styles.bodyFontStyle}>Taahhüt: {this.props.tarife.Taahhut} fatura dönemi</Text>
                
            </View>
            <View style={styles.containerStyle}>
                <View style={styles.containerHeaderStyle}>
                    <Text style={styles.containerHeaderTextStyle} >Kullanım Şartları</Text>
                </View>
                <View style={styles.subContainerStyle}>
                    <Text style={styles.subTextStyle} >Kullanım Şartları</Text>
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
        borderColor: '#00CCEE',
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

      containerHeaderStyle: {
        backgroundColor: '#00CCEE',
      },

    headerTextStyle: {
        fontSize: 30,
        textAlign: 'center',
        margin: 20,
        color: 'rgb(190,200,200)',
    },

    containerHeaderTextStyle: {
        fontSize: 18,
        textAlign: 'center',
        margin: 3,
        color: '#002233',
    },

    subTextStyle: {
        fontSize: 15,
        textAlign: 'center',
        margin: 2,
        color: 'rgb(190,200,200)',
    },

    bodyStyle: {
        margin: 30,
    },

    bodyFontStyle: {
        fontSize: 15,
        color: 'rgb(160,200,220)',
    },
};

export default MobilAyrinti;
