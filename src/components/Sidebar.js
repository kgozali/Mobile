import React from 'react';
import { AppRegistry, Image, ImageBackground, StatusBar, Platform, Dimensions, AsyncStorage } from 'react-native';
import { Container, Content, Text, List, ListItem, Icon,
Left, Body, Label, Thumbnail, StyleProvider, getTheme } from 'native-base';

const routes = ['Home', 'Home2', 'Profile'];
const membertype = ''
const fontAwesome = {
    iconFamily: 'Ionicons',
    iconFontSize: (Platform.OS === 'ios') ? 30 : 28,
    iconLineHeight: (Platform.OS === 'ios') ? 37 : 30,
};

export default class SideBar extends React.Component {

  signOut() {
    AsyncStorage.removeItem('custKey');
    this.props.navigation.navigate('LoginForm');
  }

  render() {
    return (
      <Container>
        <Content>

          <ImageBackground
            source={require('../image/background.png')}
            style={{
              height: Dimensions.get('window').height,
              width: 320,

            }}
          >

          <List style={{ marginTop: 50 }}>
            <ListItem
            onPress={() => this.props.navigation.navigate('ScreenWhatsNew')}
            style={{ height: 50 }}
            icon
            >
              <Left>
              <StyleProvider style={getTheme(fontAwesome)}>
                <Icon name="ios-star-outline" />
              </StyleProvider>
              </Left>
              <Body>
                <Text style={styles.iconText}>{ "What's New" }</Text>
              </Body>
            </ListItem>

            <ListItem
            onPress={() => this.props.navigation.navigate('Screen2')}
            style={{ height: 50 }}
            icon
            >
              <Left>
              <StyleProvider style={getTheme(fontAwesome)}>
                <Icon name="ios-cart-outline" />
              </StyleProvider>
              </Left>
              <Body>
                <Text style={styles.iconText}>Transactions</Text>
              </Body>
            </ListItem>

            <ListItem
            onPress={() => this.props.navigation.navigate('ScreenRewards')}
            style={{ height: 50 }}
            avatar
            >
            <StyleProvider style={getTheme(fontAwesome)}>
              <Icon name="ios-pricetags-outline" />
            </StyleProvider>
              <Body>
                <Text style={styles.iconText}>Rewards</Text>
              </Body>
            </ListItem>

            <ListItem
            onPress={() => this.props.navigation.navigate('Home')}
            style={{ height: 50 }}
            avatar
            >
            <StyleProvider style={getTheme(fontAwesome)}>
              <Icon name="ios-paper-outline" />
            </StyleProvider>
              <Body>
                <Text style={styles.iconText}>Menu</Text>
              </Body>
            </ListItem>

            <ListItem
            onPress={() => this.props.navigation.navigate('StoreLoc')}
            style={{ height: 50 }}
            avatar
            >
            <StyleProvider style={getTheme(fontAwesome)}>
              <Icon name="ios-locate-outline" />
            </StyleProvider>
              <Body>
                <Text style={styles.iconText}>Stores Location</Text>
              </Body>
            </ListItem>

            <ListItem
            onPress={() => this.props.navigation.navigate('Home')}
            style={{ height: 50 }}
            avatar
            >
            <StyleProvider style={getTheme(fontAwesome)}>
              <Icon name="ios-settings-outline" />
            </StyleProvider>
              <Body>
                <Text style={styles.iconText}>Accounts & Settings</Text>
              </Body>
            </ListItem>

            <ListItem
            onPress={() => this.props.navigation.navigate('Login')}
            style={{ height: 50 }}
            avatar
            >
            <StyleProvider style={getTheme(fontAwesome)}>
              <Icon name="ios-help-circle-outline" />
            </StyleProvider>
              <Body>
                <Text style={styles.iconText}>Help & Support</Text>
              </Body>
            </ListItem>

            <ListItem
            onPress={() => this.signOut()}
            style={{ height: 50 }}
            avatar
            >
            <StyleProvider style={getTheme(fontAwesome)}>
              <Icon name="ios-return-left-outline" />
            </StyleProvider>
              <Body>
                <Text style={styles.iconText}>Sign Out</Text>
              </Body>
            </ListItem>

          </List>
        </ImageBackground>

        </Content>
      </Container>


    );
  }
  }

  const styles = ({
  textstyle: {
    fontSize: 15,
    fontWeight: '900',
    color: '#000',
    marginBottom: 10,
    alignSelf: 'center',

  },
  iconText: {
    letterSpacing: 0.1,
    fontWeight: '100'
  },
  red: {
    color: 'red',
  },
  userImageStyle: {
    flex: 0,
    alignSelf: 'center',
    height: 80,
    width: 80,
    marginBottom: 15,
    marginTop: 35,
  }
});
