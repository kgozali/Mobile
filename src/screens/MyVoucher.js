import React, { Component } from 'react';
import { Image, Platform, Dimensions, View, AsyncStorage, FlatList } from 'react-native';
import { Container, Content, Card, CardItem, StyleProvider, getTheme, Tabs, Tab,
Thumbnail, Text, Button, Icon, Body, Title, Header, Left, Right, Item, Label } from 'native-base';
import axios from 'axios';
import qs from 'qs';
import getThemes from './../../native-base-theme/components';
import platform from './../../native-base-theme/variables/platform';
import VoucherList from '../components/Voucher/MyVoucherList';
import Loading from '../components/assets/LoadingScreen';

const IonIcons = {
    iconFamily: 'IonIcons',
    color: '#fff',
    iconFontSize: (Platform.OS === 'ios') ? 30 : 28,
    iconLineHeight: (Platform.OS === 'ios') ? 37 : 30,
};


export default class BuyVoucher extends Component {

  static navigationOptions = {
    header: null,
    }

    constructor(props) {
      super(props);
      this.state = {
        dataSource: [],
        isReady: false
      };
    }

  async componentDidMount() {
    try {
    const idCust = await AsyncStorage.getItem('custKey')
    .then((value) => {
      const cust = String(JSON.parse(value));
      return cust;
    });
    console.log(idCust);
    axios.post('http://103.53.198.122/mobile/membership/Myvoucher.php', qs.stringify({
      idcustomer: idCust,
    }))
    .then(response => this.setState({ dataSource: response.data, isReady: true }));
    } catch (error) {
      console.log(error);
    }
  }

  keyExtractor = (item, index) => item.id;

  renderList = ({ item }) => (
      <VoucherList item={item} navigation={this.props.navigate} />
      )
  render() {
  console.log(this.state.dataSource);
    if (!this.state.isReady) {
        return (
          <Loading />
        );
      }

    return (
      <View style={styles.containerStyle}>
        <FlatList
          data={this.state.dataSource}
          renderItem={this.renderList}
          keyExtractor={this.keyExtractor}
        />
      </View>
        );
    }
}

const styles = {

  containerStyle: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#f0f0f0',
  }

};
