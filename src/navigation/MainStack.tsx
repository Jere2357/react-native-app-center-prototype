import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useDispatch, useSelector} from 'react-redux';

import Landing from '../screens/auth/Landing';
import SignUp from '../screens/auth/SignUp';
import Login from '../screens/auth/Login';
import BottomTab from '../screens/home/dashboard/BottomTab';
import Splash from '../screens/auth/Splash';
import routes from './routes';

import {RootState} from '../store/modules/combinedReducers';
import {connected} from '../store/modules/auth/action';

const {Navigator, Screen} = createStackNavigator();

const {LANDING, SIGNUP, LOGIN, MAIN_DASHBOARD, SPLASH} = routes;

const MainStack = () => {
  const auth = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(connected(true));
  }, []);

  return (
    <Navigator initialRouteName={SPLASH} headerMode={'none'}>
      <Screen name={SPLASH} component={Splash} />
      <Screen name={LANDING} component={Landing} />
      <Screen name={SIGNUP} component={SignUp} />
      <Screen name={LOGIN} component={Login} />
      <Screen name={MAIN_DASHBOARD} component={BottomTab} />
    </Navigator>
  );
};

export default MainStack;
