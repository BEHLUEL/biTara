import React, { Component } from 'react';
import { View, ScrollView, Text, CheckBox, Button, Slider } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { mobilKisitChange } from '../actions';

class MobilKisitSayfasi extends Component {
    clickTarife(isim, deger) {
        if (isim === 'tt') {
            this.props.mobilKisitChange({ props: 'turktelekommobil', value: deger });
        } else if (isim === 'tc') {
            this.props.mobilKisitChange({ props: 'turkcell', value: deger });
        } else if (isim === 'vd') {
            this.props.mobilKisitChange({ props: 'vodafone', value: deger });
        }
        if (deger === false) {
            this.props.mobilKisitChange({ props: 'tumu', value: 'Tümünü işaretle' });
        }
    }
    click() {
        // const tumu = '';
        // const hicbiri = 'İşaretleri kaldır';
        if (this.props.tumu === 'İşaretleri kaldır') {
            this.props.mobilKisitChange({ props: 'tumu', value: 'Tümünü işaretle' });
            this.props.mobilKisitChange({ props: 'turktelekommobil', value: false });
            this.props.mobilKisitChange({ props: 'turkcell', value: false });
            this.props.mobilKisitChange({ props: 'vodafone', value: false });
        } else if (this.props.tumu === 'Tümünü işaretle') {
            this.props.mobilKisitChange({ props: 'tumu', value: 'İşaretleri kaldır' });
            this.props.mobilKisitChange({ props: 'turktelekommobil', value: true });
            this.props.mobilKisitChange({ props: 'turkcell', value: true });
            this.props.mobilKisitChange({ props: 'vodafone', value: true });
        }
    }
    render() {
        return (
            <ScrollView style={styles.body}>
                <Text style={styles.baslik}>biTara</Text>
                <Text style={styles.altbaslik}>Mobil Tarife</Text>
                <View style={styles.main}>
                    <View style={{ margin: 10 }} >
                        <Text
                            style={{ fontSize: 16, color: '#fff', textDecorationLine: 'underline', marginBottom: 5 }}
                        >GSM Operatörü
                    </Text>
                        <View style={{ margin: 10, marginTop: 5 }} >

                            <Text
                                style={{ fontSize: 14, color: '#fff', textDecorationLine: 'underline', marginTop: 5, marginLeft: 15, marginBottom: 3 }}
                                onPress={this.click.bind(this)}
                            >{this.props.tumu}
                            </Text>

                            <View style={{ flexDirection: 'row' }}>
                                <CheckBox
                                    value={this.props.turktelekommobil}
                                    title='Türk Telekom'
                                    onValueChange={deger => this.clickTarife('tt', deger)}
                                />
                                <Text style={{ marginTop: 5, color: '#fff' }}>Türk Telekom</Text>
                            </View>

                            <View style={{ flexDirection: 'row' }}>
                                <CheckBox
                                    checked={{ fillColor: 'red' }}
                                    value={this.props.turkcell}
                                    title='Turkcell'
                                    onValueChange={deger => this.clickTarife('tc', deger)}
                                />
                                <Text style={{ marginTop: 5, color: '#fff' }}>Turkcell</Text>
                            </View>

                            <View style={{ flexDirection: 'row' }}>
                                <CheckBox
                                    value={this.props.vodafone}
                                    title='Vodafone'
                                    onValueChange={deger => this.clickTarife('vd', deger)}
                                />
                                <Text style={{ marginTop: 5, color: '#fff' }}>Vodafone</Text>
                            </View>
                        </View>
                        <View style={{ marginBottom: 10 }}></View>
                        <Text style={{ fontSize: 16, color: '#fff', textDecorationLine: 'underline' }}>Kullanım Miktarları</Text>
                        <View style={{ margin: 10 }} >

                            <Text style={styles.mainText}>Dakika:</Text>
                            <Text style={{ color: '#fff' }}>{this.props.dakika}</Text>
                            <Slider
                                minimumValue={0}
                                maximumValue={10000}
                                value={this.props.dakika}
                                onValueChange={deger => this.props.mobilKisitChange({ props: 'dakika', value: deger })}
                                step={1}
                            />

                            <Text style={styles.mainText}>SMS:</Text>
                            <Text style={{ color: '#fff' }}>{this.props.sms}</Text>
                            <Slider

                                minimumValue={0}
                                maximumValue={10000}
                                value={this.props.sms}
                                onValueChange={deger => this.props.mobilKisitChange({ props: 'sms', value: deger })}
                                step={1}
                            />

                            <Text style={styles.mainText}>İnternet:</Text>
                            <Text style={{ color: '#fff' }}>{this.props.internet}</Text>
                            <Slider
                                minimumValue={0}
                                maximumValue={10}
                                value={this.props.internet}
                                minimumTrackTintColor='transparent'
                                onValueChange={deger => this.props.mobilKisitChange({ props: 'internet', value: deger })}
                                step={1}
                            />
                        </View>
                        <View style={{ marginBottom: 15 }}></View>
                        <Text
                            style={{ fontSize: 16, color: '#fff' }}
                        >Tarife Tipi:</Text>
                        <View style={{ margin: 10 }} >
                            <View style={{ flexDirection: 'row' }}>
                                <CheckBox
                                    value={this.props.faturasiz_bireysel}
                                    title='Faturasız'
                                    onValueChange={deger => this.props.mobilKisitChange({ props: 'faturasiz_bireysel', value: deger })}
                                />
                                <Text style={{ marginTop: 5, color: '#fff' }}>Faturasız/Bireysel</Text>
                            </View>

                            <View style={{ flexDirection: 'row' }}>
                                <CheckBox
                                    value={this.props.faturali_bireysel}
                                    title='Faturasız'
                                    onValueChange={deger => this.props.mobilKisitChange({ props: 'faturali_bireysel', value: deger })}
                                />
                                <Text style={{ marginTop: 5, color: '#fff' }}>Faturalı/Bireysel</Text>
                            </View>

                            <View style={{ flexDirection: 'row' }}>
                                <CheckBox
                                    value={this.props.faturali_kurumsal}
                                    title='Faturasız'
                                    onValueChange={deger => this.props.mobilKisitChange({ props: 'faturali_kurumsal', value: deger })}
                                />
                                <Text style={{ marginTop: 5, color: '#fff' }}>Faturalı/Kurumsal</Text>
                            </View>
                        </View>
                        <View style={{ marginBottom: 15 }}></View>
                    </View>
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
    }
}

const styles = {
    main: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#001B29',
        backgroundColor: 'rgb(160,170,180)',
        padding: 5,
        margin: 10
    },

    body: {

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
//export default InternetKisitSayfasi;
export default connect(mapToStateProps, { mobilKisitChange })(MobilKisitSayfasi);
