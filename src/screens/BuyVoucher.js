import React, { Component } from 'react';
import { Platform, View, FlatList } from 'react-native';
import { Text } from 'native-base';
import axios from 'axios';
import getThemes from './../../native-base-theme/components';
import platform from './../../native-base-theme/variables/platform';
import VoucherList from '../components/Voucher/BuyVoucherList';
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
    axios.post('http://103.53.198.122/mobile/membership/Buyvoucher.php')
    .then(response => this.setState({ dataSource: response.data, isReady: true }));
    } catch (error) {
      console.log('tes');
      console.log(error);
    }
  }

  pencetClick() {
    console.log('click berhasil');
  }

  render() {
    if (!this.state.isReady) {
      return (
        <Loading />
      );
    }

    return (
      <View style={styles.containerStyle}>
      <FlatList
        data={this.state.dataSource}
        renderItem={
        ({item}) => (
            <VoucherList item={item} navigation={this.props.navigate} />
            )
        }

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
