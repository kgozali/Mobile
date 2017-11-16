import React, { Component } from 'react';
import { Asset, AppLoading, Expo, Font } from 'expo';
import { Drawer } from './src/Router';

export default class App extends Component {


  state = { isReady: false };


  componentWillMount() {
    this.cacheResourcesAsync();
  }


  async cacheResourcesAsync() {
    Font.loadAsync({
        Roboto: require('native-base/Fonts/Roboto.ttf'),
        Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
    })
    const images = [
      require('./src/image/backgroundhome.jpg'),
      require('./src/image/login.jpg'),
      require('./src/image/logo.png'),
      require('./src/image/background.png'),
      require('./src/image/logoheader.png')

      //require('@expo/vector-icons/fonts/Ionicons.ttf'),
      //require('@expo/vector-icons/fonts/FontAwesome.ttf')
    ];

    for (const image of images) {
      await Asset.fromModule(image).downloadAsync();
  }

  this.setState({ isReady: true });
}

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }
    return <Drawer />;
  }
}
