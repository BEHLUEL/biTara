import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

class ListItem extends Component {
    clickLogin() {
        Actions.internetayrinti({ tarife: this.props.tarife });
    }
    render() {
        const { Hiz, Kota, Taahhut, Ad, Saglayici, Tur, Fiyat, Limit } = this.props.tarife;
       
    
                return (
                    <View style={styles.containerStyle}>
                    <View style={styles.containerHeaderStyle}>
                        <Text style={{ color: 'white', fontSize: 35 }}>{Saglayici} Sağlayıcı {this.props.gb}</Text>
                    </View>
                    <View>
                        <Text style={styles.headerStyle}>{Ad} tarife adı</Text>
                    </View>
                    <View style={styles.subContainerStyle}>
                        <Text>Hız: {Hiz}</Text>
                        <Text>Limit: {Limit}</Text>
                        <Text>Taahhüt: {Taahhut} </Text>
                        <Text>Tur: {Tur}</Text>
                        <View style={{ margin: 12 }}>
                            <Text style={{ textAlign: 'center', fontSize: 22 }}>Fiyat: {Fiyat} TL</Text>
                        </View>
                        <View style={{ marginBottom: 2 }} >
                            <Button style={{ marginTop: 10, marginBottom: 10 }} color="#00CCEE" onPress={this.clickLogin.bind(this)} title='Görüntüle' />
                        </View>
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

export default connect(mapToStateProps)(ListItem);
