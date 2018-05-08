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
                    <Text style={{ color: 'white', fontSize: 35, textAlign: 'center' }}>{Operator}</Text>
                </View>
                <View>
                    <Text style={styles.headerStyle}>{Ad}</Text>
                </View>
                <View style={styles.subContainerStyle}>
                    <Text>Dakika: {Dakika} dk</Text>
                    <Text>SMS: {Sms}</Text>
                    <Text>İnternet: {Internet} GB</Text>
                    <Text>Tarife Çeşidi: {Tur}</Text>
                    <View style={{ margin: 12 }}>
                        <Text style={{ textAlign: 'center', fontSize: 22 }}>Fiyat: {Fiyat} TL</Text>
                    </View>

                    <Button style={{ marginTop: 10, marginBottom: 10 }} color="#00CCEE" onPress={this.clickLogin.bind(this)} title='Görüntüle' />
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
