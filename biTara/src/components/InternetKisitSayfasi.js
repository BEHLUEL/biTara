import React, { Component } from 'react';
import { View, Text, CheckBox, Button, TextInput, Slider } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { internetKisitChange } from '../actions';
import InternetTarifeler from './InternetTarifeler';
import { internetAra } from '../actions/internetKisitActions';


class MobilKisitSayfasi extends Component {

    clickAra() {
        const { saglayicilar,
            limit,
            hiz,
            gb,
            tv,
            tel,
            yalin,
            taahhut } = this.props;

            Actions.internettarifeler();
            //this.props.internetAra({ saglayicilar, limit, hiz, gb, tv, tel, yalin, taahhut });
            
    }

    render() {
        return(
            <View style={styles.body}>
                <Text style={styles.baslik}>biTara</Text>
                <Text style={styles.altbaslik}>İnternet</Text>
                <View style={styles.main}>
                    <Text style={{ fontSize: 16, color: '#fff', textDecorationLine: 'underline' }}>Şirket</Text>
                    <CheckBox
                        title='Türk Telekom'
                        
                    />
                    <CheckBox
                        title='Süperonline'
                    />
                    <CheckBox
                        title='Kablonet'
                    />
                    <View style={{ marginBottom: 10 }}></View>
                    <Text style={{ fontSize: 16, color: '#fff', textDecorationLine: 'underline', marginBottom: 10 }}>Kullanım Miktarları</Text>
                    <Text style={styles.mainText}>Kota:</Text>
                    <Slider />

                    <Text style={styles.mainText}>AKK:</Text>
                    <Slider />

                    <View style={{ marginBottom: 15 }}></View>
                    <Text style={{ fontSize: 16, color: '#fff' }}>Hız:</Text>
                    <Slider />

                    <View style={{ marginBottom: 15 }}></View>
                    <Text style={{fontSize: 16, color: '#fff'}}>Televizyon:</Text>
                    <Text>Seçenekler buraya gelecek...</Text>
                </View>
                <Button
                    style={styles.button}
                    title=" Tarife Ara"
                    color="#23913C"
                    onPress={this.clickAra.bind(this)}
                />
            </View>
        );
    };
};

const styles = {
    main: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#001B29',
        backgroundColor: '#002A40',
        padding: 5,
        marginBottom: 10
    },

    body:{
        backgroundColor: '#002233',
        flex: 1,
        padding: 5
    },

    baslik: {
        fontSize: 32,
        color: '#23913C',
        textAlign: 'center'
    },
    
    altbaslik: {
        fontSize: 16,
        textAlign: 'center',
        color: '#fff',
        marginBottom: 15
    },

    mainText: {
        color: '#fff',
        fontSize: 16,
        marginBottom: 5,
    },

    button: {
        borderRadius: 10
    }
};

export default MobilKisitSayfasi;
