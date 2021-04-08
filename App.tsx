/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import crashlytics from '@react-native-firebase/crashlytics';
import codePush from 'react-native-code-push';

import {store} from './src/store';
import MainStack from './src/navigation/MainStack';

const App = () => {
  const getUserDetails = () => {
    try {
      crashlytics().setUserId('123456abcde');

      // To set multiple valued attributes
      crashlytics().setAttributes({
        role: 'admin',
        followers: '13',
        email: 'user1998@yopmail.com',
        username: 'user1998',
      });
    } catch (e) {
      crashlytics().recordError(e);
      console.log(e);
    }
  };

  useEffect(() => {
    crashlytics().log('App mounted.');
    getUserDetails();

    return () => {
      crashlytics().log('App unmounted.');
    };
  }, []);

  useEffect(() => {
    codePush.sync({
      installMode: codePush.InstallMode.ON_NEXT_RESUME,
      minimumBackgroundDuration: 60 * 10,
    });
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainStack />
        <StatusBar barStyle={'dark-content'} />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
