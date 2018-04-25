import React, { Component } from 'react';
import { View, Text, CheckBox, Button, TextInput } from 'react-native';

class MobilKisitSayfasi extends Component {
    render() {
        return(
            <View style={styles.body}>
                <Text style={styles.baslik}>biTara</Text>
                <Text style={styles.altbaslik}>İnternet</Text>
                <View style={styles.main}>
                    <Text style={{fontSize: 16, color: '#fff', textDecorationLine: 'underline'}}>Şirket</Text>
                    <CheckBox
                        title='Türk Telekom'
                    />
                    <CheckBox
                        title='Türk Telekom'
                    />
                    <CheckBox
                        title='Türk Telekom'
                    />
                    <View style={{marginBottom: 10}}></View>
                    <Text style={{fontSize: 16, color: '#fff', textDecorationLine: 'underline'}}>Kullanım Miktarları</Text>
                    <Text style={styles.mainText}>Kota:</Text>
                    <Text style={{color: '#fff'}}>En az:</Text>
                    <TextInput />
                    <Text style={{color: '#fff'}}>En fazla:</Text>
                    <TextInput />

                    <Text style={styles.mainText}>AKK:</Text>
                    <Text style={{color: '#fff'}}>En az:</Text>
                    <TextInput />
                    <Text style={{color: '#fff'}}>En fazla:</Text>
                    <TextInput />

                    <View style={{marginBottom: 15}}></View>
                    <Text style={{fontSize: 16, color: '#fff'}}>Hız:</Text>
                    <Text>Seçenekler buraya gelecek...</Text>

                    <View style={{marginBottom: 15}}></View>
                    <Text style={{fontSize: 16, color: '#fff'}}>Televizyon:</Text>
                    <Text>Seçenekler buraya gelecek...</Text>
                </View>
                <Button
                    style={styles.button}
                    title=" Tarife Ara"
                    color="#23913C"
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
        fontSize: 16
    },

    button: {
        borderRadius: 10
    }
};

export default MobilKisitSayfasi;