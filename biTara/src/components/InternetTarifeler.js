import _ from 'lodash';
import React, { Component } from 'react';
import { Text, Button, ScrollView, View, ListView } from 'react-native';
//import Card from '../ortak/Card';
//import CardSection from '../ortak/CardSection';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import RadioButton from 'react-native-radio-button';
//import internetAra from '../actions/internetKisitActions';
import { internetListData } from '../actions';
import ListItem from './internetListItem';

class InternetTarifeler extends Component {
    componentWillMount() {
        this.props.internetListData();
        this.createDataSource(this.props);
    }

    componentWillReceiveProps(nextProps) {
        this.createDataSource(nextProps);
    }
    createDataSource({ internetArray }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.dataSource = ds.cloneWithRows(internetArray);
    }
    clickLogin() {

    }
    renderRow(tarife) {
        return <ListItem tarife={tarife} />;
    }
    render() {
        return (
            <ScrollView style={{ backgroundColor: '#F4F6F9' }}>
                <ListView
                    enableEmptySections
                    dataSource={this.dataSource}
                    renderRow={this.renderRow}
                />
            </ScrollView>
        );
    };
};

const mapToStateProps = ({ internetdataResponse }) => {
    const internetArray = _.map(internetdataResponse, (val, uid) => {
        return { ...val, uid };
    });
    return { internetArray };
};

//export default InternetKisitSayfasi;
export default connect(mapToStateProps, { internetListData })(InternetTarifeler);
         
