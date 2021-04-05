import React from 'react';

import Dashboard from './Dashboard';
import TransferFunds from './TransferFunds';
import PayBills from './PayBills';
import BuyLoad from './BuyLoad';
import More from './More';

import {
  HomeTabIcon,
  TransferFundsTabIcon,
  PayBillsTabIcon,
  BuyLoadTabIcon,
  MoreTabIcon,
  HomeActiveTabIcon,
  TransferFundsActiveTabIcon,
  PayBillsActiveTabIcon,
  BuyLoadActiveTabIcon,
  MoreActiveTabIcon,
} from '../../../components/Icons';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const {Navigator, Screen} = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Navigator
      initialRouteName="Dashboard"
      tabBarOptions={{
        activeTintColor: '#201751',
        labelStyle: {fontSize: 10},
      }}>
      <Screen
        name="Dashboard"
        options={{
          tabBarIcon: ({focused}) =>
            focused ? <HomeActiveTabIcon /> : <HomeTabIcon />,
        }}
        component={Dashboard}
      />
      <Screen
        name="Transfer Funds"
        options={{
          tabBarIcon: ({focused}) =>
            focused ? <TransferFundsActiveTabIcon /> : <TransferFundsTabIcon />,
        }}
        component={TransferFunds}
      />
      <Screen
        name="Pay Bills"
        options={{
          tabBarIcon: ({focused}) =>
            focused ? <PayBillsActiveTabIcon /> : <PayBillsTabIcon />,
        }}
        component={PayBills}
      />
      <Screen
        name="Buy Load"
        options={{
          tabBarIcon: ({focused}) =>
            focused ? <BuyLoadActiveTabIcon /> : <BuyLoadTabIcon />,
        }}
        component={BuyLoad}
      />
      <Screen
        name="More"
        options={{
          tabBarIcon: ({focused}) =>
            focused ? <MoreActiveTabIcon /> : <MoreTabIcon />,
        }}
        component={More}
      />
    </Navigator>
  );
};

export default BottomTab;
