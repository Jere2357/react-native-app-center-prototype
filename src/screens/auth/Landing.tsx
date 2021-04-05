import React from 'react';
import {View, Image, ImageBackground, Text} from 'react-native';

import Container from '../../components/Layout/Container';
import {FormButton} from '../../components/Form';
import {AddUserIcon, CardPersonalizedIcon} from '../../components/Icons';
import routes from '../../navigation/routes';
import styles from './styles/LandingStyle';

const {LOGIN, SIGNUP} = routes;

const Landing = ({navigation}) => {
  return (
    <ImageBackground
      source={require('../../../assets/landing-background-image.png')}
      style={styles.imageBackground}>
      <View style={styles.headContainer}>
        <Image
          style={styles.image}
          source={require('../../../assets/psslai-icon.png')}
        />
        <FormButton
          title="Login"
          type="outline"
          onPress={() => navigation.navigate(LOGIN)}
          buttonStyle={styles.loginButton}
          titleStyle={styles.loginTitle}
        />
      </View>
      <Text style={styles.textStyle}>
        View your balances, send money, pay bills, buy load and more!
      </Text>
      <FormButton
        title="Sign up"
        onPress={() => navigation.navigate(SIGNUP)}
        buttonStyle={styles.signUpButton}
        titleStyle={styles.signUpTitle}
      />
      <View style={styles.clearButtonContainer}>
        <FormButton
          icon={<CardPersonalizedIcon />}
          title="Update mobile no. or membership info."
          type="clear"
          buttonStyle={styles.clearButton}
          titleStyle={styles.clearButtonTitle}
        />
        <FormButton
          icon={<AddUserIcon size={16} />}
          title="Become a PSSLAI member"
          type="clear"
          buttonStyle={styles.clearButton}
          titleStyle={styles.clearButtonTitle}
        />
        <Text style={styles.infoText}>
          PSSLAI is regulated by the Banko Sentral ng Pilipinas.
          <Text style={styles.underlinedText}> (02) 8706-7067 </Text> •
          <Text style={styles.underlinedText}> consumeraffairs@bsp.gov.ph</Text>
        </Text>
      </View>
    </ImageBackground>
  );
};

export default Landing;
