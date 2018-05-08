import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

class ListItem extends Component {
    clickLogin() {
        Actions.mobilayrinti({ tarife: this.props.tarife });
    }
    render() {
        const { Dakika, Sms, Internet, Ad, Operator, Tur, Fiyat } = this.props.tarife;
       console.log(this.props.dakika);
       console.log(Sms);
       console.log(Internet);
       
       
       if(this.props.dakika < Dakika) {
            if(this.props.sms < Sms) {

            }
       }
                return (
                <View style={styles.containerStyle}>
                <View style={styles.containerHeaderStyle}>
                    <Text style={{ color: 'white', fontSize: 20, textAlign: 'center' }}>{Operator}</Text>
                </View>
                <View>
                    <Text style={styles.headerStyle}>{Ad}</Text>
                </View>
                <View style={styles.subContainerStyle}>
                    <Text style={styles.textStyle}>Dakika: {Dakika} dk</Text>
                    <Text style={styles.textStyle}>SMS: {Sms}</Text>
                    <Text style={styles.textStyle}>İnternet: {Internet} GB</Text>
                    <Text style={styles.textStyle}>Tarife Çeşidi: {Tur}</Text>
                    <View style={{ margin: 12 }}>
                        <Text style={{ textAlign: 'center', fontSize: 22, color: '#333333' }}>Fiyat: {Fiyat} TL</Text>
                    </View>

                    <Button style={{ marginTop: 10, marginBottom: 10 }} color="#D9002E" onPress={this.clickLogin.bind(this)} title='Görüntüle' />
                </View>
            </View>
            );
                            
    }
}

const styles = {
    containerStyle: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#EEF0F3',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 1,
        margin: 10,
        backgroundColor: '#8C7BFF'
      },

      containerHeaderStyle: {
        margin: 10,
        backgroundColor: '#8C7BFF',
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
        color: '#14153A',
        backgroundColor: '#fff',
        textAlign: 'center',
        fontSize: 20
      },

    textStyle: {
        color: '#333333'
    }
};
const mapToStateProps = ({ mobilResponse }) => {
    const { tumu,
        turktelekommobil,
        turkcell,
        vodafone,
        dakika,
        sms,
        internet,
        faturali_bireysel,
        faturasiz_bireysel,
        faturali_kurumsal } = mobilResponse;

    return {
        tumu,
        turktelekommobil,
        turkcell,
        vodafone,
        dakika,
        sms,
        internet,
        faturali_bireysel,
        faturasiz_bireysel,
        faturali_kurumsal
    };
};

export default connect(mapToStateProps)(ListItem);
