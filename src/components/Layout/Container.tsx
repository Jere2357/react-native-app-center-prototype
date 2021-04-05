import React, {ReactNode} from 'react';
import {View} from 'react-native';
import styles from './styles/ContainerStyle';

interface ContainerProps {
  children?: ReactNode;
  style?: object;
}

const Container = ({style, children}: ContainerProps) => (
  <View style={[styles.container, style]}>{children}</View>
);

export default Container;
