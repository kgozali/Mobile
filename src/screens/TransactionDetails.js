import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Dimensions, Image,
TouchableHighlight } from 'react-native';
import ViewPager from 'react-native-viewpager';
//var ViewPager = require('./ViewPager');

export default class TransactionDetails extends Component {

  static navigationOptions = {
    header: null
  }
  render() {
    return (
      <View>
        <Text> {this.props.navigation.state.params.tes} </Text>
      </View>
    );
  }
}
