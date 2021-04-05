import React from 'react';
import {CheckBox, CheckBoxProps} from 'react-native-elements';
import styles from './styles/CheckboxStyle';

const FormCheckbox = (props: CheckBoxProps) => (
  <CheckBox containerStyle={styles.container} {...props} />
);

export default FormCheckbox;
