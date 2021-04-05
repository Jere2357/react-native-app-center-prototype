import React from 'react';
import {Input} from 'react-native-elements';
import styles from './styles/InputStyle';

const FormInput = (props: any) => (
  <Input
    inputContainerStyle={!props.isFocus ? styles.container : styles.activeInput}
    labelStyle={styles.label}
    {...props}
  />
);

export default FormInput;
