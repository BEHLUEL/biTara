import React, { Component } from 'react';
import { View, ScrollView, Text, CheckBox, Button, Slider } from 'react-native';
import { Actions } from 'react-native-router-flux';
import RadioButton from 'react-native-radio-button'

class MobilKisitSayfasi extends Component {
    constructor(props) {
        super(props);
        this.state = {
            turktelekommobil: true,
            turkcell: true,
            vodafone: true,
            saglayicilar: false,
            dakika: 0,
            sms: 0,
            internet: 0,
            faturali: false,
            faturasiz: false,
            segment: false
        };
    };

    render() {
        return (
            <ScrollView style={styles.body}>
                <Text style={styles.baslik}>biTara</Text>
                <Text style={styles.altbaslik}>Mobil Tarife</Text>
                <View style={styles.main}>
                    <Text style={{fontSize: 16, color: '#fff', textDecorationLine: 'underline'}}>GSM Operatörü</Text>
                    
                    <View style={{ flexDirection: 'row' }}>
                    <CheckBox
                        value={this.state.turktelekommobil}
                        title='Türk Telekom'
                        onValueChange={turktelekommobil => this.setState({ turktelekommobil })}
                    />
                    <Text style={{ marginTop: 5, color: '#fff' }}>Türk Telekom</Text>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                    <CheckBox
                        value={this.state.turkcell}
                        title='Turkcell'
                        onValueChange={turkcell => this.setState({ turkcell })}
                    />
                    <Text style={{ marginTop: 5, color: '#fff' }}>Turkcell</Text>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                    <CheckBox
                        value={this.state.vodafone}
                        title='Vodafone'
                        onValueChange={vodafone => this.setState({ vodafone })}
                    />
                    <Text style={{ marginTop: 5, color: '#fff' }}>Vodafone</Text>
                    </View>

                    <View style={{marginBottom: 10}}></View>
                    <Text style={{fontSize: 16, color: '#fff', textDecorationLine: 'underline'}}>Kullanım Miktarları</Text>
                    <Text style={styles.mainText}>Dakika:</Text>
                    <Text style={{color: '#fff'}}>{this.state.dakika}</Text>
                    <Slider
                        minimumValue={0}
                        maximumValue={10000}
                        value={Number(this.state.dakika)}
                        onValueChange={dakika => this.setState({ dakika })}
                        step={1}
                    />

                    <Text style={styles.mainText}>SMS:</Text>
                    <Text style={{ color: '#fff' }}>{this.state.sms}</Text>
                    <Slider
                        minimumValue={0}
                        maximumValue={10000}
                        value={Number(this.state.sms)}
                        onValueChange={sms => this.setState({ sms })}
                        step={1}
                    />

                    <Text style={styles.mainText}>İnternet:</Text>
                    <Text style={{ color: '#fff' }}>{this.state.internet}</Text>
                    <Slider
                        minimumValue={0}
                        maximumValue={50}
                        value={Number(this.state.internet)}
                        onValueChange={internet => this.setState({ internet })}
                        step={1}
                    />

                    <View style={{marginBottom: 15}}></View>
                    <Text 
                    style={{fontSize: 16, color: '#fff'}}
                    >Tarife Tipi:</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <CheckBox
                            value={this.state.faturali}
                            title='Faturalı'
                            onValueChange={faturali => this.setState({ faturali })}
                        />
                        <Text style={{ marginTop: 5, color: '#fff' }}>Faturalı</Text>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <CheckBox
                            value={this.state.faturasiz}
                            title='Faturasız'
                            onValueChange={faturasiz => this.setState({ faturasiz })}
                        />
                        <Text style={{ marginTop: 5, color: '#fff' }}>Faturasız</Text>
                    </View>

                    <View style={{ marginBottom: 15 }}></View>
                    <Text style={{ fontSize: 16, color: '#fff' }}>Segment:</Text>
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