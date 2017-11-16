import React from 'react';
import { Dimensions, View, Platform } from 'react-native';
import { Item, Icon, Label, Text, Card, CardItem, Image, Body,
StyleProvider, getTheme, Button, Left, Right } from 'native-base';


const fontAwesome = {
    iconFamily: 'FontAwesome',
    iconFontSize: (Platform.OS === 'ios') ? 30 : 30,
    iconLineHeight: (Platform.OS === 'ios') ? 37 : 30,
};


const RewardsList = (props) => {

    return (
    <View style={styles.containerStyle}>
    <Card style={{ marginBottom: 15 }}>
      <CardItem>
        <Left>
          <Body>
            <Text style={{ fontWeight: '500', fontSize: 18 }}>
            FREE Sendok IKEA
            </Text>
          </Body>
        </Left>
      </CardItem>
      <CardItem cardBody>
        <Image source={require('../image/sendok.jpg')} style={{ height: 200, width: null, flex: 1 }} />
      </CardItem>
      <CardItem style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Left>
        <Item>
          <StyleProvider style={getTheme(fontAwesome)}>
            <Icon active name='heart-o' />
          </StyleProvider>
        <Label style={{ fontSize: 18 }}> 1500 Points</Label>
        </Item>
        </Left>

        <Right>
        <Button style={styles.buttonStyle} onPress={() => console.log('press')}>
            <View>
            <Text style={{ fontSize: 16 }}>Redeem</Text>
            </View>
        </Button>
        </Right>
      </CardItem>
    </Card>
      </View>
    );
  };

  export default RewardsList;

  const styles = {
    containerStyle: {
      height: 220,
      width: Dimensions.get('window').width - 40,
      borderWidth: 0,
      padding: 10,
      marginTop: 20,
      marginLeft: 20,
      marginRight: 20,
      marginBottom: 10,
      backgroundColor: '#d3d3d3'
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
