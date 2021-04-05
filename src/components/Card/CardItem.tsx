import React, {ReactNode} from 'react';
import {View, Text, ImageBackground} from 'react-native';
import styles from './styles/CardItemStyle';

interface ContainerProps {
  children?: ReactNode;
}

const CardItem = ({children}: ContainerProps) => (
  <ImageBackground
    source={require('../../../assets/item-background.png')}
    style={styles.container}>
    {children}
  </ImageBackground>
);

export default CardItem;
