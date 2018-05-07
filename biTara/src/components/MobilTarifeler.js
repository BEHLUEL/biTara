import _ from 'lodash';
import React, { Component } from 'react';
import { Text, Button, View, ScrollView, ListView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
//import Card from '../ortak/Card';
//import CardSection from '../ortak/CardSection';
import { mobilListData } from '../actions';


class MobilTarifeler extends Component {

    componentWillMount() {
      this.props.mobilListData();
    }

    componentWillReceiveProps(nextProps) {
      const ds = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      });
      this.dataSource = ds.cloneWithRows(nextProps.mobilsArray);
    }

    clickLogin() {

    }

    render() {
      console.log(this.props.mobilsArray);
        return (
         <ScrollView style={{ backgroundColor: '#002233' }}>
           <View style={styles.containerStyle}>
           <View style={styles.containerHeaderStyle}>
                <Text style={{ color: 'white', fontSize: 35, textAlign: 'center' }}>{} Operatör</Text>
           </View>
                <View>
                    <Text style={styles.headerStyle}>{} tarife adı</Text>
                </View>
                <View style={styles.subContainerStyle}>
                    <Text>Dakika: {}</Text>
                    <Text>SMS: {}</Text>
                    <Text>İnternet: {} GB</Text>
                    <Text>Tarife Çeşidi: {}</Text>
                    <View style={{ margin: 12 }}>
                    <Text style={{ textAlign: 'center', fontSize: 22 }}>Fiyat: {} TL</Text>                        
                    </View>      

            <Button style={{ marginTop: 10, marginBottom: 10 }} color="#00CCEE" onPress={this.clickLogin.bind(this)} title='Görüntüle' />
            </View>
            </View>  
          </ScrollView>        
        );
    };
};

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
const mapStateToProps = ({ mobilDataResponse }) => {
  const mobilsArray = _.map(mobilDataResponse, (val, id) => {
    return { val, id };
  });
  return { mobilsArray };
};

export default connect(mapStateToProps, { mobilListData })(MobilTarifeler);
