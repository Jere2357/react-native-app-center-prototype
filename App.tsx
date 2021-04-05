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
import {StatusBar, useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';

import {store} from './src/store';
import MainStack from './src/navigation/MainStack';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainStack />
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
