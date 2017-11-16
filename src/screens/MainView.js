import React from 'react';
import { AsyncStorage, View, ImageBackground, Dimensions, Platform, Image } from 'react-native';
import { Container, Header, Title, Left, Icon, StyleProvider,
Right, Button, Body, Content, Text, Item, Label, getTheme, Tabs } from 'native-base';
import Spinner from 'react-native-loading-spinner-overlay';
import axios from 'axios';
import qs from 'qs';
import Expo from 'expo';
import getThemes from './../../native-base-theme/components';
import platform from './../../native-base-theme/variables/platform';
import WhatsNew from './WhatsNew';

const fontAwesome = {
    iconFamily: 'FontAwesome',
    iconFontSize: (Platform.OS === 'ios') ? 24 : 24,
    iconLineHeight: (Platform.OS === 'ios') ? 37 : 30,
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

      axios.post('http://103.53.198.122/mobile/membership/Home.php', qs.stringify({
        idcust: custKey
      }))
      .then(response => this.setState({ dataStream: response.data, cek: !this.state.cek }));
    } catch (error) {
      console.log(error);
    }
  }


  renderData(kode) {
    if (kode === 'nama') {
      const namacust = this.state.dataStream.map(cust => cust.namaCust);
      return namacust;
    }

    if (kode === 'point') {
      const pointmember = this.state.dataStream.map(cust => cust.points);
      return pointmember;
    }
    if (kode === 'emoney') {
      const emoney = this.state.dataStream.map(cust => cust.emoney);
      return emoney;
    }
  }

  render() {
    console.log(this.state.dataStream);

    return (
      <StyleProvider style={getThemes(platform)}>
      <Container>
        <Content>
        <ImageBackground
        style={styles.imageBackground}
        source={require('../image/backgroundhome.jpg')}
        >

        <Spinner
        visible={this.state.cek}
        textContent={'Please Wait'}
        textStyle={styles.textStyle}
        size={'large'}
        />


        <View style={styles.viewWithText}>
            <View style={styles.profilePicture}>
              <Image
              style={styles.profilePictureImg}
              source={require('../image/backgroundhome.jpg')}
              />
            </View>

        <Text style={styles.nameStyle}>{this.renderData('nama')}</Text>

        <View style={styles.pointContainer}>
          <View style={styles.iconTextStyling}>
            <StyleProvider style={getTheme(fontAwesome)}>
              <Icon active style={styles.iconStyle} name='money' />
            </StyleProvider>
          <Text style={styles.textStyle}>Rp. {this.renderData('emoney')}</Text>
          </View>


          <View style={styles.iconTextStyling}>
          <StyleProvider style={getTheme(fontAwesome)}>
            <Icon active style={styles.iconStyle} name='heart-o' />
          </StyleProvider>
          <Text style={styles.textStyle}>{this.renderData('point')} Points</Text>
          </View>
        </View>

          <View style={styles.viewPagerStyle}>
            <WhatsNew />
          </View>

        </View>

      </ImageBackground>
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
    backgroundColor: '#c0333d',
  },
  iconTextStyling: {
    flex: 0,
    flexDirection: 'row',
    height: 40
  },
  viewPagerStyle: {
    height: 100,
    width: Dimensions.get('window').width + 15,
    marginTop: 15
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    backgroundColor: 'red',
    alignSelf: 'center',
    marginTop: 25
  },
  profilePictureImg: {
    borderRadius: 50,
    width: 100,
    height: 100,
  },
  pointContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 15
  },
  nameStyle: {
    fontSize: 20,
    color: '#fff',
     marginBottom: 15,
     alignSelf: 'center',
     marginTop: 10
   },
   iconStyle: {
     color: '#fff',
    marginRight: 15
  },
  textStyle: {
    fontSize: 20,
     color: '#fff'
   }

};
