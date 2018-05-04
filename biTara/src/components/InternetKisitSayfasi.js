import React, { Component } from 'react';
import { View, ScrollView, Text, CheckBox, Button, TextInput, Slider } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import RadioButton from 'react-native-radio-button'
import { internetKisitChange, internetAra } from '../actions';


class InternetKisitSayfasi extends Component {
    state = { 
        turktelekom: true,
        superonline: true,
        kablonet: true,
        turknet: true,
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

    render() {
        return(
            <ScrollView style={styles.body}>
                <Text style={styles.baslik}>biTara</Text>
                <Text style={styles.altbaslik}>İnternet</Text>
                <View style={styles.main}>
                    <Text style={{ fontSize: 16, color: '#fff', textDecorationLine: 'underline' }}>Şirket</Text>
                    <View style={{ flexDirection: 'row' }}>
                    <CheckBox
                        value={this.state.turktelekom}
                        title='Türk Telekom'
                        onValueChange={turktelekom => this.setState({ turktelekom })}
                    />
                    <Text style={{ marginTop: 5, color: '#fff' }}>Türk Telekom</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                    <CheckBox
                        value={this.state.superonline}
                        title='Superonline'
                        onValueChange={superonline => this.setState({ superonline })}
                    />
                    <Text style={{ marginTop: 5, color: '#fff' }}>Superonline</Text>
                    </View>
                    
                    <View style={{ flexDirection: 'row' }}>
                    <CheckBox
                        title='Kablonet'
                        value={this.state.kablonet}
                        onValueChange={kablonet => this.setState({ kablonet })}
                    />
                    <Text style={{ marginTop: 5, color: '#fff' }}>Kablonet</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                    <CheckBox
                        value={this.state.turknet}
                        title='Turknet'
                        onValueChange={turknet => this.setState({ turknet })}
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
