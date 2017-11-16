import React from 'react';
import { FlatList, View } from 'react-native';
import { StyleProvider, Content, Container, Header,
Icon, Left, Button, Body, Title, Right } from 'native-base';
import axios from 'axios';
import ViewMaps from '../components/assets/ViewMaps';
import GlobalStyles from '../styles/GlobalStyles';
import getThemes from './../../native-base-theme/components';
import platform from './../../native-base-theme/variables/platform';
import Loading from '../components/assets/LoadingScreen';

export default class StoreLocation extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isReady: false
    };
  }

  componentDidMount() {
    try {
      axios.post('http://103.53.198.122/mobile/membership/GetStore.php')
      .then(response => this.setState({ data: response.data, isReady: true }));
    } catch (e) {
      console.error(e);
    }
  }

  render() {
    if (!this.state.isReady) {
      return (
        <Loading />
      );
    }
    return (
      <StyleProvider style={getThemes(platform)}>
              <Container style={{ flex: 1 }}>
                  <Header hasTabs style={{ backgroundColor: '#c0333d' }} androidStatusBarColor='black'>
                    <Left style={{ flex: 1 }}>
                      <Button
                        transparent
                        onPress={() => this.props.navigation.navigate('Home')}
                      >
                        <Icon style={GlobalStyles.backIconStyleWhite} name="ios-arrow-back" />
                      </Button>
                    </Left>
                    <Body style={{ flex: 1, alignItems: 'center' }}>
                      <Title>Stores</Title>
                    </Body>
                    <Right style={{ flex: 1 }} />
                  </Header>


                  <View style={styles.containerStyle}>

                  <FlatList
                    data={this.state.data}
                    renderItem={
                    ({ item }) => (
                        <ViewMaps item={item} navigation={this.props.navigate} />
                        )
                    }

                  />

                  </View>


      </Container>


      </StyleProvider>

    );
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#f0f0f0',
  }
};
