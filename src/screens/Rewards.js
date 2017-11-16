import React, { Component } from 'react';
import { Image, Platform, Dimensions, View, BackHandler, ToastAndroid } from 'react-native';
import { Container, Content, Card, CardItem, StyleProvider, getTheme, Tabs, Tab,
Thumbnail, Text, Button, Icon, Body, Title, Header, Left, Right, Item, Label } from 'native-base';
import axios from 'axios';
import qs from 'qs';
import RewardsList from '../components/RewardsList';
import getThemes from './../../native-base-theme/components';
import platform from './../../native-base-theme/variables/platform';
import BackHeader from '../components/BackHeader';
import BuyVoucher from '../screens/BuyVoucher';
import MyVoucher from '../screens/MyVoucher';
import GlobalStyles from '../styles/GlobalStyles';

export default class CardShowcaseExample extends Component {
  static navigationOptions = {
    header: null,
    }

constructor(props) {
  super(props);
  this.backButtonListener = null;
}

  render() {
        return (
      <StyleProvider style={getThemes(platform)}>

        <Container style={{ flex: 1 }}>

        <Header hasTabs style={{ backgroundColor: '#c0333d' }} androidStatusBarColor='black'>
          <Left style={{ flex: 1 }}>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate('Home')}
            >
              <Icon style={GlobalStyles.backIconStyleWhite} name="ios-arrow-back" />
            </Button>
          </Left>
          <Body style={{ flex: 1, alignItems: 'center' }}>
            <Title>Rewards</Title>
          </Body>
          <Right style={{ flex: 1 }} />
        </Header>

        <Tabs initialPage={0} tabBarUnderlineStyle={styles.tabStyle}>
            <Tab heading="Buy Rewards" tabStyle={{ backgroundColor: '#c0333d' }} textStyle={{ color: '#a9a9a9' }} activeTabStyle={{ backgroundColor: '#c0333d' }} activeTextStyle={{ color: '#fff', fontWeight: '700' }}>
                <BuyVoucher navigate={this.props.navigation} />
            </Tab>

            <Tab heading="My Rewards" tabStyle={{ backgroundColor: '#c0333d' }} textStyle={{ color: '#a9a9a9' }} activeTabStyle={{ backgroundColor: '#c0333d' }} activeTextStyle={{ color: '#fff', fontWeight: '700' }}>
                <MyVoucher navigate={this.props.navigation} />
            </Tab>

        </Tabs>
      </Container>
    </StyleProvider>
        );
    }
}

const styles = {
  buttonStyle: {
    width: Dimensions.get('window').width * (30 / 100),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderWidth: 0.8,
    borderColor: 'black',
    backgroundColor: '#c0333d',
    marginTop: 20
  },
  tabStyle: {
    borderBottomWidth: 1,
    backgroundColor: '#fff',
    opacity: 1

  },

  backIconStyle: {
    fontSize: 30,
    color: 'white'
  }


};
