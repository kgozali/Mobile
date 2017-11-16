import React, { Component } from 'react';
import { Image, View, Platform, Dimensions, StyleSheet, Text,
ScrollView, TouchableHighlight } from 'react-native';
import { Container, Label, Button, Item, Icon, StyleProvider, getTheme, Tabs, Tab } from 'native-base';
import getThemes from './../../native-base-theme/components';
import platform from './../../native-base-theme/variables/platform';
import GlobalStyles from '../styles/GlobalStyles';

const fontAwesome = {
    iconFamily: 'FontAwesome',
    FontSize: (Platform.OS === 'ios') ? 30 : 28,
    iconLineHeight: (Platform.OS === 'ios') ? 30 : 30,
    Color: '#fff'
};

export default class VoucherDetails extends Component {

  render() {
    return (
      <StyleProvider style={getThemes(platform)}>
      <Container>

      <View style={styles.imageContainerStyle}>

          <Image
          style={styles.imageStyle}
          source={{ uri: this.props.navigation.state.params.img }}
          defaultSource={require('../image/logo.png')}
          >
                <Button
                    style={{ marginTop: 15 }}
                    transparent
                    onPress={() => this.props.navigation.goBack()}
                >
                    <Icon style={GlobalStyles.backIconStyleBlack} name="ios-arrow-back" />
                </Button>
          </Image>
      </View>

      <View style={styles.infoViewStyle}>
          <Text style={styles.namaTextStyle}>{this.props.navigation.state.params.nama}</Text>
            <View style={GlobalStyles.viewPointStyle}>
                <View style={{ marginRight: 5 }}>
                  <StyleProvider style={getTheme(fontAwesome)}>
                    <Icon style={{ fontSize: 16, color: 'red' }} name='heart' />
                  </StyleProvider>
                </View>

              <View>
              <Label style={{ fontSize: 16 }}>{this.props.navigation.state.params.points}</Label>
              </View>
            </View>
          <Text style={styles.descriptionStyle}>{this.props.navigation.state.params.desc}</Text>
          <Text style={styles.descriptionStyle}>{this.props.navigation.state.params.category} - {this.props.navigation.state.params.vendor}
          </Text>
      </View>

      <Tabs initialPage={0} tabBarUnderlineStyle={styles.tabStyle}>
          <Tab heading="Overview" tabStyle={{ backgroundColor: '#fff' }} textStyle={{ color: '#000' }} activeTabStyle={{ backgroundColor: '#fff' }} activeTextStyle={{ color: '#000', fontWeight: '700' }}>
              <ScrollView style={styles.scrollStyle}>
                  <Text>
                    {this.props.navigation.state.params.fulldesc}
                  </Text>
              </ScrollView>
          </Tab>

          <Tab heading="T&C" tabStyle={{ backgroundColor: '#fff' }} textStyle={{ color: '#000' }} activeTabStyle={{ backgroundColor: '#fff' }} activeTextStyle={{ color: '#000', fontWeight: '700' }}>
              <ScrollView style={styles.scrollStyle}>
                  <Text>
                    {this.props.navigation.state.params.tc}
                  </Text>
              </ScrollView>
          </Tab>

      </Tabs>

      <TouchableHighlight onPress={() => console.log('tes')}>
          <View style={styles.buttonViewStyle}>
              <Text style={styles.buttonTextStyle}> Buy </Text>
          </View>
      </TouchableHighlight>
    </Container>


  </StyleProvider>
    );
  }
}

const styles = StyleSheet.create({
  imageContainerStyle: {
    height: 170,
    width: Dimensions.get('window').width,

  },
  imageStyle: {
    height: 170,
    width: Dimensions.get('window').width,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  tabStyle: {
    borderBottomWidth: 1,
    backgroundColor: '#fff',
    opacity: 1

  },
  scrollStyle: {
    paddingLeft: 15,
    paddingRight: 10,
    marginTop: 10,
    marginBottom: 3,
    flex: 1
  },
  buttonTextStyle: {
    color: '#fff',
    fontSize: 18,
  },
  buttonViewStyle: {
    height: 40,
    width: Dimensions.get('window').width,
    backgroundColor: '#c0333d',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  backIconStyle: {
    fontSize: 30,
    color: 'black'
  },
  buttonStyle: {
    marginTop: 20
  },

  infoViewStyle: {
    height: 100,
    width: Dimensions.get('window').width,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderColor: '#d3d3d3',
    borderTopWidth: 1,
  },
  descriptionStyle: {
    fontSize: 14,
    color: '#c0c0c0',
    marginBottom: 4,
    marginLeft: 10
  },
  pointItemStyle: {
    marginLeft: 10
  },
  namaTextStyle: {
    fontSize: 18,
    marginTop: 5,
    marginLeft: 10
  },

});
