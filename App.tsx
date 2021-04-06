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
import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';

import {store} from './src/store';
import MainStack from './src/navigation/MainStack';

const App = () => {
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
