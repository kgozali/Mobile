import React from 'react';
import { AsyncStorage, View, ImageBackground, Dimensions, Platform, Image } from 'react-native';
import { Container, Header, Title, Left, Icon, StyleProvider,
Right, Button, Body, Content, Text, Item, Label, getTheme, Tabs, Tab } from 'native-base';
import Spinner from 'react-native-loading-spinner-overlay';
import axios from 'axios';
import qs from 'qs';
import Expo from 'expo';
import getThemes from './../../native-base-theme/components';
import platform from './../../native-base-theme/variables/platform';
import WhatsNew from './WhatsNew';
import MainView from './MainView'

const fontAwesome = {
    iconFamily: 'FontAwesome',
    iconFontSize: (Platform.OS === 'ios') ? 20 : 20,
    iconLineHeight: (Platform.OS === 'ios') ? 20 : 20,
    color: '#fff'
};


export default class HomeScreen extends React.Component {
  static navigationOptions = {
      header: null,
      headerStyle: {
        marginTop: Expo.Constants.statusBarHeight
      }
    }

  state= { dataStream: [], cek: true }

  async componentWillMount() {
    try {
      const custKey = await AsyncStorage.getItem('custKey')
      .then((value) => {
        const cust = String(JSON.parse(value));
        return cust;
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    console.log(this.state.dataStream);

    return (
      <StyleProvider style={getThemes(platform)}>
      <Container>
        <Content>
        <Header hasTabs style={{ backgroundColor: '#c0333d' }} androidStatusBarColor='black'>
          <Left style={{ flex: 1 }}>
          <Button
            transparent
            onPress={() => this.props.navigation.navigate('DrawerOpen')}
          >
            <Icon style={{ color: '#fff', fontSize: 30 }} name="menu" />
          </Button>
          </Left>
          <Body style={{ flex: 1 }}>
            <View style={{ width: 120, height: 30, backgroundColor: 'white', alignItems: 'center' }}>

            </View>
           </Body>
          <Right style={{ flex: 1 }}>
              <Button
                transparent
                onPress={() => this.props.navigation.navigate('DrawerOpen')}
              >
                <Icon style={{ color: '#fff', fontSize: 30 }} name="settings" />
              </Button>
          </Right>
        </Header>


        <Tabs initialPage={0} tabBarUnderlineStyle={{ borderBottomWidth: 1, backgroundColor: '#fff', opacity: 1 }}>
            <Tab heading="Home" tabStyle={{ backgroundColor: '#c0333d' }} textStyle={{ color: '#a9a9a9' }} activeTabStyle={{ backgroundColor: '#c0333d' }} activeTextStyle={{ color: '#fff', fontWeight: '700' }}>
              <MainView />
            </Tab>

            <Tab heading="Promo" tabStyle={{ backgroundColor: '#c0333d' }} textStyle={{ color: '#a9a9a9' }} activeTabStyle={{ backgroundColor: '#c0333d' }} activeTextStyle={{ color: '#fff', fontWeight: '700' }}>

            </Tab>

            <Tab heading="News" tabStyle={{ backgroundColor: '#c0333d' }} textStyle={{ color: '#a9a9a9' }} activeTabStyle={{ backgroundColor: '#c0333d' }} activeTextStyle={{ color: '#fff', fontWeight: '700' }}>

            </Tab>
        </Tabs>

    </Content>
  </Container>
  </StyleProvider>

    );
  }
}

const styles = {
  imageBackground: {
    flex: 0,
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    alignItems: 'flex-start',
    alignSelf: 'stretch'
  },
  viewWithText: {
    marginLeft: 15
  },
  iconTextStyling: {
    flex: 0,
    flexDirection: 'row',
    height: 40
  },
  viewPagerStyle: {
    height: 300,
    width: Dimensions.get('window').width + 15,
    marginTop: 15
  }

};
