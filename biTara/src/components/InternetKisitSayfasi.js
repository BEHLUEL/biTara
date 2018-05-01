import React, { Component } from 'react';
import { View, ScrollView, Text, CheckBox, Button, TextInput, Slider } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { internetKisitChange, internetAra } from '../actions';


class InternetKisitSayfasi extends Component {
    
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
            <ScrollView style={styles.body}>
                <Text style={styles.baslik}>biTara</Text>
                <Text style={styles.altbaslik}>İnternet</Text>
                <View style={styles.main}>
                    <Text style={{ fontSize: 16, color: '#fff', textDecorationLine: 'underline' }}>Şirket</Text>
                    <View style={{ flexDirection: 'row' }}>
                    <CheckBox
                        value={this.props.saglayicilar}
                        title='Türk Telekom'
                    />
                    <Text style={{ marginTop: 5, color: '#fff' }}>Türk Telekom</Text>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                    <CheckBox
                        value={this.props.saglayicilar}
                        title='Superonline'
                    />
                    <Text style={{ marginTop: 5, color: '#fff' }}>Superonline</Text>
                    </View>
                    
                    <View style={{ flexDirection: 'row' }}>
                    <CheckBox
                        title='Kablonet'
                        value={this.props.saglayicilar}
                    />
                    <Text style={{ marginTop: 5, color: '#fff' }}>Kablonet</Text>
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
                    />

                    <Text style={styles.mainText}>AKK:</Text>
                    

                    <View style={{ marginBottom: 15 }}></View>
                    <Text style={{ fontSize: 16, color: '#fff' }}>Hız:</Text>
                    <Slider 
                    minimumValue={3}
                    maximumValue={100}
                    value={this.props.hiz}
                    onValueChange={hiz => this.props.internetKisitChange({ props: 'hiz', value: hiz })}
                    />

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
