import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Dimensions, Image,
TouchableHighlight, Platform } from 'react-native';
import { Button, Icon, StyleProvider, getTheme,
Left, Right, Body, Title, Header } from 'native-base';
import ViewPager from 'react-native-viewpager';
import GlobalStyles from '../styles/GlobalStyles';
//var ViewPager = require('./ViewPager');

const deviceWidth = Dimensions.get('window').width;

const fontAwesome = {
    iconFamily: 'Ionicons',
    iconFontSize: (Platform.OS === 'ios') ? 30 : 28,
    iconLineHeight: (Platform.OS === 'ios') ? 37 : 30,
};

const IMGS = [
  'https://images.unsplash.com/photo-1441742917377-57f78ee0e582?h=1024',
  'https://images.unsplash.com/photo-1441716844725-09cedc13a4e7?h=1024',
  'https://images.unsplash.com/photo-1441448770220-76743f9e6af6?h=1024',
  'https://images.unsplash.com/photo-1441260038675-7329ab4cc264?h=1024',
  'https://images.unsplash.com/photo-1441126270775-739547c8680c?h=1024',
  'https://images.unsplash.com/photo-1440964829947-ca3277bd37f8?h=1024',
  'https://images.unsplash.com/photo-1440847899694-90043f91c7f9?h=1024'
];

const count = 0;

const WhatsNew = React.createClass({

  getInitialState: function () {
    const dataSource = new ViewPager.DataSource({
      pageHasChanged: (p1, p2) => p1 !== p2,
    });

    return {
      dataSource: dataSource.cloneWithPages(IMGS),
      page: 0
    };
  },

  render: function () {
    return (
      <View style={styles.container}>
        <ViewPager
          ref={(viewpager) => { this.viewpager = viewpager; }}
          style={this.props.style}
          dataSource={this.state.dataSource}
          renderPage={this._renderPage}
          isLoop={true}
          autoPlay={false} />
      </View>

    );
  },

  _renderPage: function(
    data: Object,
    pageID: number | string,) {
    return (
      <Image
        source={{uri: data}}
        style={styles.page} />
    );
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  page: {
    width: deviceWidth,
  },
  button: {
    padding: 10,
  },
});

module.exports = WhatsNew;
