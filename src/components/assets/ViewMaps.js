import React, { Component } from 'react';
import { Dimensions, View, Platform, Image,
StyleSheet, Text, TouchableHighlight } from 'react-native';
import { StyleProvider, getTheme, Item, Icon, Label } from 'native-base';
import { MapView } from 'expo';
import getThemes from './../../../native-base-theme/components';
import platform from './../../../native-base-theme/variables/platform';

const fontAwesome = {
    iconFamily: 'FontAwesome',
    iconFontSize: (Platform.OS === 'ios') ? 5 : 15,
    iconLineHeight: (Platform.OS === 'ios') ? 5 : 15,
};


export default class ViewMaps extends Component {

  render() {
    return (

  <StyleProvider style={getThemes(platform)}>
    <TouchableHighlight
    onPress={() => console.log('tes')}
    >
      <View style={styles.containerStyle}>
        <View style={styles.listViewContainerStyle}>
          <View style={styles.imageContainerStyle}>

          <MapView
            style={{ flex: 1 }}
            initialRegion={{
              latitude: -7.97367915419,
              longitude: 112.613914181,
              latitudeDelta: 0.0043,
              longitudeDelta: 0.0034,
            }}
            provider={MapView.PROVIDER_GOOGLE}
          />

        </View>

        <View style={styles.textContainerStyle}>
          <Text style={styles.namaTextStyle}>tes</Text>
          <Text style={styles.descriptionStyle}> tes </Text>
          <Text style={styles.descriptionStyle}> tes </Text>

        <Item style={styles.pointItemStyle}>
          <StyleProvider style={getTheme(fontAwesome)}>
            <Icon style={{ fontSize: 18 }} name='heart' />
          </StyleProvider>
          <Label style={{ fontSize: 18 }}>tes</Label>
        </Item>
        </View>
      </View>
      </View>
      </TouchableHighlight>

      </StyleProvider>
    );
  }
}

  const styles = StyleSheet.create({
    imageContainerStyle: {
      height: 150,
      width: Dimensions.get('window').width - 20,

    },
    imageStyle: {
      height: 150,
      width: Dimensions.get('window').width - 20,
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
      borderTopLeftRadius: 5,
      borderTopRightRadius: 5,
    },
    listViewContainerStyle: {
      width: Dimensions.get('window').width - 20,
      borderWidth: 0,
      marginTop: 5,
      marginBottom: 10,
      backgroundColor: '#fff',
      alignSelf: 'center',
      borderRadius: 10
    },
    containerStyle: {
      width: Dimensions.get('window').width,
      borderWidth: 0,
      backgroundColor: '#f0f0f0',
      alignSelf: 'center'
    },
    textContainerStyle: {
      alignItems: 'flex-start',
      marginLeft: 10
    },
    namaTextStyle: {
      fontWeight: 'bold',
      fontSize: 18,
      marginBottom: 8,
      marginTop: 5
    },
    pointStyle: {
      fontWeight: 'normal',
      fontSize: 14,
    },
    buttonStyle: {
      width: Dimensions.get('window').width * (80 / 100),
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      borderWidth: 0.8,
      borderColor: 'black',
      backgroundColor: '#c0333d',
      marginTop: 20
    },
    descriptionStyle: {
      fontWeight: 'normal',
      fontSize: 14,
      color: '#c0c0c0',
      marginBottom: 4
    },
    pointItemStyle: {
      marginTop: 10,
      marginBottom: 15,
      underline: false
    }

  });
