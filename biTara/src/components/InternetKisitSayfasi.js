import React, { Component } from 'react';
import { View, ScrollView, Text, CheckBox, Button, TextInput, Slider } from 'react-native';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import RadioButton from 'react-native-radio-button';
//import internetAra from '../actions/internetKisitActions';
import { internetKisitChange } from '../actions';


class InternetKisitSayfasi extends Component {

    clickAra() {
        console.log('gönderiliyir');
        Actions.internettarifeler();   
    }
    clickTarife(deger, isim) {
        if (isim === 'tt') {
            this.props.internetKisitChange({ props: 'turktelekom', value: deger });
        } else if (isim === 'so') {
            this.props.internetKisitChange({ props: 'superonline', value: deger });
        } else if (isim === 'kn') {
            this.props.internetKisitChange({ props: 'kablonet', value: deger });
        } else if (isim === 'tn') {
            this.props.internetKisitChange({ props: 'turknet', value: deger });
        }
        if (deger === false) {
            this.props.internetKisitChange({ props: 'tumu', value: deger });
        } else if (deger === true) {
            if (this.props.turktelekom * this.props.superonline * this.props.kablonet * this.props.turknet === true) {
            this.props.internetKisitChange({ props: 'tumu', value: deger });
            }
        }
    }
    click(deger) {
        this.props.internetKisitChange({ props: 'tumu', value: deger });
        this.props.internetKisitChange({ props: 'turktelekom', value: deger });
        this.props.internetKisitChange({ props: 'superonline', value: deger });
        this.props.internetKisitChange({ props: 'kablonet', value: deger });
        this.props.internetKisitChange({ props: 'turknet', value: deger });
    }

    render() {
        return (
            <ScrollView style={styles.body}>

                <Text style={styles.baslik}>biTara</Text>
                <Text style={styles.altbaslik}>İnternet</Text>
                <View style={styles.main}>
                    <Text style={{ fontSize: 16, color: '#fff', textDecorationLine: 'underline', marginBottom: 10 }}>Şirket</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <CheckBox
                            value={this.props.tumu}
                            title='Tümü'
                            onValueChange={tumu => this.click(tumu)}
                        />
                        <Text style={{ marginTop: 5, color: '#fff', fontSize: 14, textDecorationLine: 'underline' }}>Tümünü işaretle</Text>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <CheckBox
                            value={this.props.turktelekom}
                            title='Türk Telekom'
                            onValueChange={turktelekom => this.clickTarife(turktelekom, 'tt')}
                        />
                        <Text style={{ marginTop: 5, color: '#fff' }}>Türk Telekom</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <CheckBox
                            value={this.props.superonline}
                            title='Superonline'
                            onValueChange={turktelekom => this.clickTarife(turktelekom, 'so')}
                        />
                        <Text style={{ marginTop: 5, color: '#fff' }}>Superonline</Text>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <CheckBox
                            title='Kablonet'
                            value={this.props.kablonet}
                            onValueChange={turktelekom => this.clickTarife(turktelekom, 'kn')}
                        />
                        <Text style={{ marginTop: 5, color: '#fff' }}>Kablonet</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <CheckBox
                            value={this.props.turknet}
                            title='Turknet'
                            onValueChange={turktelekom => this.clickTarife(turktelekom, 'tn')}
                        />
                        <Text style={{ marginTop: 5, color: '#fff' }}>Turk.net</Text>
                    </View>

                    <View style={{ marginBottom: 10 }}></View>
                    <Text style={{ fontSize: 16, color: '#fff', textDecorationLine: 'underline', marginBottom: 10 }}>Kullanım Miktarları</Text>
                    <Text style={styles.mainText}>Kota:</Text>
                    <Text>{this.props.gb}</Text>
                    <Slider
                        minimumValue={0}
                        maximumValue={250}
                        value={this.props.gb}
                        onValueChange={gb => this.props.internetKisitChange({ props: 'gb', value: gb })}
                        step={1}
                    />

                    <Text style={styles.mainText}>Limit</Text>


                    <View style={{ marginBottom: 15 }}></View>
                    <Text style={{ fontSize: 16, color: '#fff' }}>Hız:</Text>
                    <Slider
                        minimumValue={3}
                        maximumValue={100}
                        value={this.props.hiz}
                        onValueChange={hiz => this.props.internetKisitChange({ props: 'hiz', value: hiz })}
                        step={1}
                    />

                    <View style={{ marginBottom: 15 }}></View>
                    <Text style={{ fontSize: 16, color: '#fff' }}>Televizyon:</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <CheckBox
                            value={this.props.tv}
                            title='TV'
                            onValueChange={tv => this.props.internetKisitChange({ props: 'tv', value: tv })}
                        />
                        <Text style={{ marginTop: 5, color: '#fff' }}>İçinde televizyon olan paketleri görmek istiyorum.</Text>
                    </View>
                </View>

                <Button
                    style={styles.button}
                    title=" Tarife Ara"
                    color="#23913C"
                    onPress={this.clickAra.bind(this)}
                />
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

    body: {
        backgroundColor: '#002233',
        flex: 1,
        padding: 5,
        overflow: 'scroll'
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
const mapToStateProps = ({ internetResponse }) => {
    const { tumu,
        turktelekom,
        superonline,
        kablonet,
        turknet,
        saglayicilar,
        limit,
        hiz,
        gb,
        tv,
        tel,
        yalin,
        taahhut } = internetResponse;

    return {
        tumu,
        turktelekom,
        superonline,
        kablonet,
        turknet,
        saglayicilar,
        limit,
        hiz,
        gb,
        tv,
        tel,
        yalin,
        taahhut
    };
};
//export default InternetKisitSayfasi;
export default connect(mapToStateProps, { internetKisitChange })(InternetKisitSayfasi);
