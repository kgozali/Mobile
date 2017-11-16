import React from 'react';
import { AsyncStorage, Platform, View, FlatList } from 'react-native';
import { Container, Content, Header, Left, Button,
Body, Right, Title, Icon, StyleProvider, getTheme, Text, Segment } from 'native-base';
import Spinner from 'react-native-loading-spinner-overlay';
import axios from 'axios';
import qs from 'qs';
import Expo from 'expo';
import getThemes from './../../native-base-theme/components';
import platform from './../../native-base-theme/variables/platform';
import TransactionList from '../components/TransactionList';
import GlobalStyles from '../styles/GlobalStyles';
import Loading from '../components/assets/LoadingScreen';


const fontAwesome = {
    iconFamily: 'Ionicons',
    iconFontSize: (Platform.OS === 'ios') ? 30 : 28,
    iconLineHeight: (Platform.OS === 'ios') ? 37 : 30,
    Color: '#fff'
};

export default class Transactions extends React.Component {

  static navigationOptions = {
    header: null,
    }

    state= {
      retail: [],
      pesanan: [],
      isReady: false,
      activeTab: true
    }


  async componentDidMount() {
    try {
      const custKey = await AsyncStorage.getItem('custKey')
      .then((value) => {
        const cust = String(JSON.parse(value));
        return cust;
      });

      axios.post('http://103.53.198.122/mobile/membership/Retail.php', qs.stringify({
        idcust: custKey
      }))
      .then(response => this.setState({ retail: response.data }));

      axios.post('http://103.53.198.122/mobile/membership/Pesanan.php', qs.stringify({
        idcust: custKey
      }))
      .then(response => this.setState({ pesanan: response.data, isReady: true }));
    } catch (error) {
      console.log(error);
    }
  }

  afterFetchData() {
    console.log(this.state.dataStream);
  }

  keyExtractor = (item, index) => item.id;

  renderList = ({ item }) => (
      <TransactionList stream={item} navigation={this.props.navigation} />
      )

  renderTransactions() {
    if (this.state.activeTab) {
      return (
        <FlatList
        data={this.state.retail}
        renderItem={this.renderList}
        keyExtractor={this.keyExtractor}
        />
    );
    }
    return (
      <FlatList
      data={this.state.pesanan}
      renderItem={this.renderList}
      keyExtractor={this.keyExtractor}
      />
  );
  }
  renderContent() {
    if (!this.state.isReady) {
      return (
        <Loading />
      );
    }

    return (
      <View>
        {this.renderTransactions()}
      </View>
    );
  }
  render() {
    return (
      <StyleProvider style={getThemes(platform)}>
      <Container>
      <Header hasTabs style={{ backgroundColor: '#c0333d' }} androidStatusBarColor='black'>
        <Left style={{ flex: 1 }}>
          <Button
            transparent
            onPress={() => this.props.navigation.goBack()}
          >
            <Icon style={GlobalStyles.backIconStyleWhite} name="ios-arrow-back" />
          </Button>
        </Left>
        <Body style={{ flex: 1 }}>
          <Title>Transactions</Title>
        </Body>
        <Right style={{ flex: 1 }} />

      </Header>


      <Segment>
        <Button
        first active={this.state.activeTab === true}
        onPress={() => this.setState({ activeTab: true })}
        >
          <Text>Retail</Text>
        </Button>

        <Button last active={this.state.activeTab === false} onPress={() => this.setState({ activeTab: false })}>
          <Text>Pesanan</Text>
        </Button>
      </Segment>

        <Content>
          {this.renderContent()}
        </Content>

      </Container>
      </StyleProvider>

    );
  }

}
