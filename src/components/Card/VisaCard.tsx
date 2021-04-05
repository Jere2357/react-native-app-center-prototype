import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import styles from './styles/NoCardStyle';

const VisaCard = () => {
  return (
    <ImageBackground
      source={require('../../../assets/blue-card.png')}
      style={styles.container}>
      <View style={styles.cardDetails}>
        <Text style={styles.title}>PSSLAI Visa Card</Text>
        <Text style={styles.secureCode}>xxxx xxxx xxxx</Text>
      </View>
    </ImageBackground>
  );
};

export default VisaCard;
