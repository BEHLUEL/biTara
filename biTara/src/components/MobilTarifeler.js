import _ from 'lodash';
import React, { Component } from 'react';
import { Text, Button, View, ScrollView, ListView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
//import Card from '../ortak/Card';
//import CardSection from '../ortak/CardSection';
import { mobilListData } from '../actions';
import ListItem from './mobilListItem';


class MobilTarifeler extends Component {

  componentWillMount() {
    this.props.mobilListData();
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
     }
  createDataSource({ mobilsArray }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(mobilsArray);
  }

  clickLogin() {

  }
  renderRow(tarife) {
    return <ListItem tarife={tarife} />;
  }
  render() {
    console.log(this.props.mobilsArray);
    return (
      <ScrollView style={{ backgroundColor: '#002233' }}>
        <ListView
          enableEmptySections
          dataSource={this.dataSource}
          renderRow={this.renderRow}
        />
      </ScrollView>
    );
  }
}


const mapStateToProps = ({ mobildataResponse }) => {
  const mobilsArray = _.map(mobildataResponse, (val,uid) => {
    return { ...val, uid };  
  });
  return { mobilsArray };
};

export default connect(mapStateToProps, { mobilListData })(MobilTarifeler);
