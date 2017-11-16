import React from 'react';
import { Dimensions, View, Platform } from 'react-native';
import { Item, Icon, Label, Text, StyleProvider, getTheme, Button } from 'native-base';


const fontAwesome = {
    iconFamily: 'FontAwesome',
    iconFontSize: (Platform.OS === 'ios') ? 30 : 30,
    iconLineHeight: (Platform.OS === 'ios') ? 37 : 30,
};


export default class TransactionDetails extends React.Component {

  render() {
    return (
    <View style={styles.containerStyle}>
        <View style={styles.tipeStyle}>
          <Text style={styles.tipeTextStyle}> {this.props.stream.tipe} - {this.props.stream.cabang} </Text>
          <Text style={styles.cabangStyle}> {this.props.stream.tgl} </Text>
        </View>

        <View style={styles.totalContainerStyle}>
          <View>
            <Item>
            <StyleProvider style={getTheme(fontAwesome)}>
              <Icon active name='money' />
            </StyleProvider>
          <Label style={{ fontSize: 24 }}> Rp. {this.props.stream.total} </Label>
            </Item>
          </View>

          <View>
            <Item>
              <StyleProvider style={getTheme(fontAwesome)}>
                <Icon active name='heart-o' />
              </StyleProvider>
            <Label style={{ fontSize: 24 }}> {this.props.stream.Point} Points</Label>
            </Item>
          </View>
        </View>

        <Button style={styles.buttonStyle} onPress={() => this.props.navigation.navigate('Screen3', { tes: this.props.stream.id })}>
            <View>
            <Text style={{ fontSize: 16 }}>View</Text>
            </View>
        </Button>

      </View>
    );
  }

}

  const styles = {
    containerStyle: {
      height: 220,
      width: Dimensions.get('window').width,
      borderWidth: 0,
      padding: 10,
      marginBottom: 20,
      backgroundColor: '#d3d3d3',
      alignSelf: 'center'
    },
    tipeStyle: {
      alignItems: 'center',
    },
    tipeTextStyle: {
      fontWeight: 'bold',
      fontSize: 20,
    },
    cabangStyle: {
      fontWeight: 'bold',
      fontSize: 16,
    },
    totalContainerStyle: {
      marginTop: 10,
      paddingLeft: 10,
      paddingRight: 10
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
    }

  };
