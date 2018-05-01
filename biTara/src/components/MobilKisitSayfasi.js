import React, { Component } from 'react';
import { View, ScrollView, Text, CheckBox, Button, TextInput } from 'react-native';
import { Actions } from 'react-native-router-flux';

class MobilKisitSayfasi extends Component {
    render() {
        return (
            <ScrollView style={styles.body}>
                <Text style={styles.baslik}>biTara</Text>
                <Text style={styles.altbaslik}>Mobil Tarife</Text>
                <View style={styles.main}>
                    <Text style={{fontSize: 16, color: '#fff', textDecorationLine: 'underline'}}>GSM Operatörü</Text>
                    
                    <View style={{ flexDirection: 'row' }}>
                    <CheckBox
                        title='Türk Telekom'
                    />
                    <Text style={{ marginTop: 5, color: '#fff' }}>Türk Telekom</Text>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                    <CheckBox
                        title='Turkcell'
                    />
                    <Text style={{ marginTop: 5, color: '#fff' }}>Turkcell</Text>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                    <CheckBox
                        title='Vodafone'
                    />
                    <Text style={{ marginTop: 5, color: '#fff' }}>Vodafone</Text>
                    </View>

                    <View style={{marginBottom: 10}}></View>
                    <Text style={{fontSize: 16, color: '#fff', textDecorationLine: 'underline'}}>Kullanım Miktarları</Text>
                    <Text style={styles.mainText}>Dakika:</Text>
                    <Text style={{color: '#fff'}}>En az:</Text>
                    <TextInput />
                    <Text style={{color: '#fff'}}>En fazla:</Text>
                    <TextInput />

                    <Text style={styles.mainText}>SMS:</Text>
                    <Text style={{ color: '#fff' }}>En az:</Text>
                    <TextInput />
                    <Text style={{ color: '#fff' }}>En fazla:</Text>
                    <TextInput />

                    <Text style={styles.mainText}>İnternet:</Text>
                    <Text style={{ color: '#fff' }}>En az:</Text>
                    <TextInput />
                    <Text style={{ color: '#fff' }}>En fazla:</Text>
                    <TextInput />

                    <View style={{marginBottom: 15}}></View>
                    <Text 
                    style={{fontSize: 16, color: '#fff'}}
                    >Tarife Tipi:</Text>
                    <Text>Seçenekler buraya gelecek...</Text>

                    <View style={{ marginBottom: 15 }}></View>
                    <Text 
                    style={{ fontSize: 16, color: '#fff' }}
                    >Segment:</Text>
                    <Text>Seçenekler buraya gelecek...</Text>
                </View>

                <Button
                    style={styles.button}
                    title="Tarife Ara"
                    color="#23913C"
                    onPress={Actions.mobiltarifeler}
                />

                <View style={{ marginBottom: 15 }}></View>
            </ScrollView>
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
        padding: 5,
        overflow: 'hidden'
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