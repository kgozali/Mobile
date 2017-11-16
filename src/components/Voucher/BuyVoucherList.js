import React, { Component } from 'react';
import { Dimensions, View, Platform, Image,
StyleSheet, Text, TouchableHighlight } from 'react-native';
import { StyleProvider, getTheme, Item, Icon, Label } from 'native-base';
import getThemes from './../../../native-base-theme/components';
import platform from './../../../native-base-theme/variables/platform';

const fontAwesome = {
    iconFamily: 'FontAwesome',
    iconFontSize: (Platform.OS === 'ios') ? 5 : 15,
    iconLineHeight: (Platform.OS === 'ios') ? 5 : 15,
};


export default class BuyVoucherList extends Component {

  render() {
    return (

  <StyleProvider style={getThemes(platform)}>
    <TouchableHighlight
    onPress={() => this.props.navigation.navigate('ScreenVdetails',
    { voucher: this.props.item.id,
      img: this.props.item.img,
      fulldesc: this.props.item.fulldesc,
      points: this.props.item.points,
      desc: this.props.item.desc,
      nama: this.props.item.nama,
      tc: this.props.item.tc,
      category: this.props.item.category,
      vendor: this.props.item.vendor
     })}
    >
      <View style={styles.containerStyle}>
        <View style={styles.listViewContainerStyle}>
          <View style={styles.imageContainerStyle}>

          <Image
          style={styles.imageStyle}
          source={{ uri: this.props.item.img }}
          defaultSource={require('../../image/logo.png')}
          />

        </View>

        <View style={styles.textContainerStyle}>
          <Text style={styles.namaTextStyle}> {this.props.item.nama} </Text>
          <Text style={styles.descriptionStyle}> {this.props.item.desc} </Text>
          <Text style={styles.descriptionStyle}> {this.props.item.category} - {this.props.item.vendor} </Text>

        <Item style={styles.pointItemStyle}>
          <StyleProvider style={getTheme(fontAwesome)}>
            <Icon style={{ fontSize: 18 }} name='heart' />
          </StyleProvider>
          <Label style={{ fontSize: 18 }}>{this.props.item.points}</Label>
        </Item>
        </View>
      </View>
      </View>
      </TouchableHighlight>

      </StyleProvider>
    )
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
