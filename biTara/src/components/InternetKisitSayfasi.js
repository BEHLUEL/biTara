import React, { Component } from 'react';
import { View, ScrollView, Text, CheckBox, Button, TextInput, Slider } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import RadioButton from 'react-native-radio-button';
import { internetKisitChange, internetAra } from '../actions';


class InternetKisitSayfasi extends Component {
    state = { 
        tumu: false,
        turktelekom: false,
        superonline: false,
        kablonet: false,
        turknet: false,
        saglayicilar: false,
        limit: false,
        hiz: 0,
        gb: 0,
        tv: false,
        tel: false,
        yalin: false,
        taahhut: 0
    };

    clickAra() {
        const { saglayicilar,
            limit,
            hiz,
            gb,
            tv,
            tel,
            yalin,
            taahhut } = this.state;

            Actions.internettarifeler();
            //this.props.internetAra({ saglayicilar, limit, hiz, gb, tv, tel, yalin, taahhut });
            
    };

    clickTarife(deger, isim) {
        if (isim === 'tt') {
            this.setState({ turktelekom: deger });
        } else if (isim === 'so') {
            this.setState({ superonline: deger });
        } else if (isim === 'kn') {
            this.setState({ kablonet: deger });
        } else if (isim === 'tn') {
            this.setState({ turknet: deger });
        }
        if (deger === false) {
            this.setState({ tumu: false });
        } else if (deger === true) {
                if (this.state.turktelekom === true & this.state.superonline === true & this.state.kablonet === true & this.state.turknet === true) {
                    this.setState({ tumu: true });
                }
        }
    }
    click(deger) {
        if (deger === true) {
            this.setState({
                turktelekom: true,
                superonline: true,
                kablonet: true,
                turknet: true
            });
        } else {
            this.setState({
                turktelekom: false,
                superonline: false,
                kablonet: false,
                turknet: false
            });
        }
       this.setState({ tumu: deger });
    }

    render() {
        return(
            <ScrollView style={styles.body}>
                <Text style={styles.baslik}>biTara</Text>
                <Text style={styles.altbaslik}>İnternet</Text>
                <View style={styles.main}>
                    <Text style={{ fontSize: 16, color: '#fff', textDecorationLine: 'underline', marginBottom: 10 }}>Şirket</Text>
                    <View style={{ flexDirection: 'row' }}>
                    <CheckBox
                        value={this.state.tumu}
                        title='Türk Telekom'
                        onValueChange={tumu => this.click(tumu)}
                    />
                    <Text style={{ marginTop: 5, color: '#fff', fontSize: 14, textDecorationLine: 'underline' }}>Tümünü işaretle</Text>
                    </View>
                   
                    <View style={{ flexDirection: 'row' }}>
                    <CheckBox
                        value={this.state.turktelekom}
                        title='Türk Telekom'
                        onValueChange={turktelekom => this.clickTarife(turktelekom, 'tt')}
                    />
                    <Text style={{ marginTop: 5, color: '#fff' }}>Türk Telekom</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                    <CheckBox
                        value={this.state.superonline}
                        title='Superonline'
                        onValueChange={superonline => this.clickTarife(superonline, 'so')}
                    />
                    <Text style={{ marginTop: 5, color: '#fff' }}>Superonline</Text>
                    </View>
                    
                    <View style={{ flexDirection: 'row' }}>
                    <CheckBox
                        title='Kablonet'
                        value={this.state.kablonet}
                        onValueChange={kablonet => this.clickTarife(kablonet, 'kn')}
                    />
                    <Text style={{ marginTop: 5, color: '#fff' }}>Kablonet</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                    <CheckBox
                        value={this.state.turknet}
                        title='Turknet'
                        onValueChange={turknet => this.clickTarife(turknet, 'tn')}
                    />
                    <Text style={{ marginTop: 5, color: '#fff' }}>Turk.net</Text>
                    </View>
                
                    <View style={{ marginBottom: 10 }}></View>
                    <Text style={{ fontSize: 16, color: '#fff', textDecorationLine: 'underline', marginBottom: 10 }}>Kullanım Miktarları</Text>
                    <Text style={styles.mainText}>Kota:</Text>
                    <Text>{this.state.gb}</Text>
                    <Slider 
                    minimumValue={0}
                    maximumValue={250}
                    value={Number(this.state.gb)}
                    onValueChange={gb => this.setState({ gb })}
                    step={1}
                    />

                    <Text style={styles.mainText}>Limit</Text>
                    

                    <View style={{ marginBottom: 15 }}></View>
                    <Text style={{ fontSize: 16, color: '#fff' }}>Hız:</Text>
                    <Slider 
                    minimumValue={3}
                    maximumValue={100}
                    value={this.state.hiz}
                    onValueChange={hiz => this.setState({ hiz })}
                    step={1}
                    />

                    <View style={{ marginBottom: 15 }}></View>
                    <Text style={{fontSize: 16, color: '#fff'}}>Televizyon:</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <CheckBox
                            value={this.state.tv}
                            title='TV'
                            onValueChange={tv => this.setState({ tv })}
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

    body:{
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
    const { saglayicilar,
        limit,
        hiz,
        gb,
        tv,
        tel,
        yalin,
        taahhut } = internetResponse;

    return { saglayicilar,
        limit,
        hiz,
        gb,
        tv,
        tel,
        yalin,
        taahhut };
};
//export default InternetKisitSayfasi;
export default connect(mapToStateProps, { internetKisitChange, internetAra })(InternetKisitSayfasi);
