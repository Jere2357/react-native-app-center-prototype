import React, {useEffect} from 'react';
import {ImageBackground, Text} from 'react-native';
import {StackActions} from '@react-navigation/native';

import routes from '../../navigation/routes';
import styles from './styles/SplashStyle';

const Splash = ({navigation}: any) => {
  useEffect(() => {
    setTimeout(
      () => navigation.dispatch(StackActions.replace(routes.LANDING)),
      1000,
    );
  }, []);

  return (
    <ImageBackground
      style={styles.container}
      source={require('../../../assets/splash-page.png')}></ImageBackground>
  );
};

export default Splash;
