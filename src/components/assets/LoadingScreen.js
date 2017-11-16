import React, { Component } from 'react';
import { Container, Content, Spinner } from 'native-base'
import { View } from 'react-native';
//var ViewPager = require('./ViewPager');

export default class TransactionDetails extends Component {

  static navigationOptions = {
    header: null
  }
  render() {
    return (
      <View style={styles.viewStyle}>
      <Container>
              <Content>
                  <Spinner color='grey' />
              </Content>
      </Container>
      </View>
    );
  }
}

const styles = {
  viewStyle: {
    flex: 1,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  }
};
