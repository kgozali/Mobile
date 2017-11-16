import React, { Component } from 'react';
import { Image, Platform, Dimensions, View } from 'react-native';
import { Container, Content, Card, CardItem, StyleProvider, getTheme,
Thumbnail, Text, Button, Icon, Body, Title, Header, Left, Right, Item, Label } from 'native-base';
import getThemes from './../../native-base-theme/components';
import platform from './../../native-base-theme/variables/platform';

const fontAwesome = {
    iconFamily: 'FontAwesome',
    iconFontSize: (Platform.OS === 'ios') ? 30 : 24,
    iconLineHeight: (Platform.OS === 'ios') ? 37 : 30,
};

const IonIcons = {
    iconFamily: 'IonIcons',
    iconFontSize: (Platform.OS === 'ios') ? 30 : 28,
    iconLineHeight: (Platform.OS === 'ios') ? 37 : 30,
};

const BackHeader = (props) => {

        return (
          <StyleProvider style={getThemes(platform)}>
            <Header hasTabs style={{ backgroundColor: '#c0333d' }} androidStatusBarColor='black'>
              <Left style={{ flex: 1 }}>
                <Button
                  transparent
                  onPress={() => props.navigation.goBack()}
                >
                <StyleProvider style={getTheme(IonIcons)}>
                  <Icon name="ios-arrow-back" />
                </StyleProvider>
                </Button>
              </Left>
              <Body style={{ flex: 1 }}>
                <Title>{props.title}</Title>
              </Body>
              <Right style={{ flex: 1 }} />
            </Header>
          </StyleProvider>
        );
    };

export default BackHeader;

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
  }

};
