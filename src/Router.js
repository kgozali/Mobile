import React from 'react';
import { Root } from 'native-base';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import Home from './screens/Home';
import LoginForm from './screens/LoginForm';
import SideBar from './components/Sidebar';
import Transactions from './screens/Transactions';
import TransactionDetails from './screens/TransactionDetails';
import TransactionList from './components/TransactionList';
import WhatsNew from './screens/WhatsNew';
import Rewards from './screens/Rewards';
import VoucherDetails from './screens/VoucherDetails';
import StoreLocation from './screens/StoreLocation';

const StackHome = StackNavigator({
  Screen1: {
    screen: Home,
  },
  Screen2: {
    screen: Transactions
  },
  Screen3: {
    screen: TransactionDetails,
  },

},
{
  headerMode: 'screen',

});

const StackWhatsNew = StackNavigator({
  ScreenWhatsNew: {
    screen: WhatsNew,
    navigationOptions: {
      header: null
    }
  }
},
{
  headerMode: 'screen'
});

const StackLocation = StackNavigator({
  ScreenLocation: {
    screen: StoreLocation,
    navigationOptions: {
      header: null
    }
  }
},
{
  headerMode: 'screen'
});

const StackRewards = StackNavigator({
  ScreenRewards: {
    screen: Rewards,
    navigationOptions: {
      header: null
    },
  },
  ScreenVdetails: {
    screen: VoucherDetails,
    navigationOptions: {
      header: null
  }
}
},
{
  headerMode: 'screen'
});

export const Drawer = DrawerNavigator(
  {
  LoginForm: {
    screen: LoginForm
  },
  Home: {
    screen: StackHome
  },
  WhatsNew: {
    screen: StackWhatsNew
  },
  Rewards: {
    screen: StackRewards
  },
  StoreLoc: {
    screen: StackLocation
  }
},
{
  contentComponent: props => <SideBar {...props} />

}
);
