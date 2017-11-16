import React, { Component } from 'react';
import { Image, ImageBackground, Dimensions, AsyncStorage, View, ToastAndroid } from 'react-native';
import { Container, Content, Button, Text, Item, StyleProvider
, Icon, Input, getTheme, Toast } from 'native-base';
import Spinner from 'react-native-loading-spinner-overlay';
import axios from 'axios';
import qs from 'qs';


const fontAwesome = {
    iconFamily: 'FontAwesome',
    iconFontSize: 24,
};

export default class LoginForm extends Component {


  constructor(props) {
    super(props);
    this.state = { noktp: 0, nomember: 0, dataStream: [], cek: false, showToast: true };
    this.loginPress = this.loginPress.bind(this);
    this.checkLoginCredentials = this.checkLoginCredentials.bind(this);
  }

 async componentWillMount() {
   // AsyncStorage.removeItem('custKey')
   try {
     const tes = await AsyncStorage.getItem('custKey');
     if (tes !== null) {
       this.props.navigation.navigate('Home');
     }
   } catch (error) {
     console.log(error);
   }
 }

  loginPress() {
    this.setState({ cek: !this.state.cek, dataStream: [] });
    axios.post('http://103.53.198.122/mobile/membership/LoginCheck.php', qs.stringify({
      ktp: this.state.noktp,
      member: this.state.nomember
    }))
    .then((response) => {
      this.setState({ dataStream: response.data }, function () { this.checkLoginCredentials(); });
    }).catch(console.log);
}

checkLoginCredentials() {
  // console.log(this.state.dataStream);
try {
  const customer = this.state.dataStream.map(item => item.status);
  console.log(customer);


    if (this.state.dataStream.length !== 0) {
      // berhasil login
      this.setState({ cek: !this.state.cek });
      AsyncStorage.setItem('custKey', JSON.stringify(customer));
      this.props.navigation.navigate('Home');
      console.log('berhasil');
    } else {
      // gagal login
      console.log('gagal');
      ToastAndroid.show('Login Gagal, Mohon Periksa Kembali', ToastAndroid.SHORT);
      this.setState({ cek: !this.state.cek });
    }
  } catch (error) {
    console.log(error);
  }
}

  render() {
  return (
  <Container style={styles.masterContainer}>
    <Content>
      <ImageBackground style={styles.imageBackground} source={require('../image/login.jpg')}>
      <Container style={styles.itemContainer}>

      <Spinner
      visible={this.state.cek}
      textContent={'Please Wait'}
      textStyle={{ color: '#FFF', fontSize: 15 }}
      size={'large'}
      />

        <Image style={styles.logoStyle} source={require('../image/logo.png')} />
        <Item style={styles.insideContainerStyle}>

          <StyleProvider style={getTheme(fontAwesome)}>
              <Icon
              active
              style={{ fontSize: 24, color: '#d3d3d3' }}
              name='id-card'
              />
          </StyleProvider>

          <Input
          style={styles.textBoxStyle}
          placeholder='No. KTP'
          placeholderTextColor='#d3d3d3'
          onChangeText={(text) => this.setState({ noktp: text })}
          />

        </Item>

        <Item style={styles.insideContainerStyle2}>

          <StyleProvider style={getTheme(fontAwesome)}>
            <Icon
            active
            style={{ fontSize: 36, color: '#d3d3d3', marginRight: 8 }}
            name='mobile-phone'
            />
          </StyleProvider>

          <Input
          style={styles.textBoxStyle}
          placeholder='No. Member'
          placeholderTextColor='#d3d3d3'
          onChangeText={(text) => this.setState({ nomember: text })}
          />

        </Item>


          <Button style={styles.buttonStyle} onPress={() => this.loginPress()}>
            <View>
            <Text>Sign In</Text>
            </View>
          </Button>


      </Container>
      </ImageBackground>
    </Content>

</Container>

  );
  }

}
const styles = ({
  masterContainer: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },
  imageBackground: {
    flex: 1,
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    justifyContent: 'center',
    marginBottom: 50,
    backgroundColor: 'rgba(193, 3, 27, 0.8 )'
  },
  buttonStyle: {
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderWidth: 0.8,
    borderColor: 'gray',
    marginTop: 15,
    backgroundColor: '#c0333d'
  },
  insideContainerStyle: {
    flex: 0,
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    paddingLeft: 10,
  },
  insideContainerStyle2: {
    flex: 0,
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    paddingLeft: 15,
  },
  logoBoxStyle: {
    flex: 0,
    flexDirection: 'column',
    alignItems: 'center',
    width: Dimensions.get('window').width,
    height: (Dimensions.get('window').height / 2) - 80,

  },
  logoStyle: {
    flex: 0,
    height: 144,
    width: 144,
    resizeMode: 'stretch',
    marginBottom: 100,
    paddingBottom: 50,

  },
  itemContainer: {
    flex: 0,
    flexDirection: 'column',
    height: (68 / 100) * Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  textBoxStyle: {
    color: '#000',
  }
});
