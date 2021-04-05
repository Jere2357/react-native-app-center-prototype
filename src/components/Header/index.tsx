import React from 'react';
import {Header, Text} from 'react-native-elements';

import {ArrowLeftIcon} from '../Icons';
import {WHITE} from '../../../theme';
import styles from './styles/HeaderStyle';

const CommonHeader = ({title, onBackPress}: any) => {
  return (
    <Header backgroundColor={WHITE}>
      <ArrowLeftIcon size={30} style={styles.arrowLeft} onPress={onBackPress} />
      <Text h4 h4Style={styles.headerTitle}>
        {title}
      </Text>
    </Header>
  );
};

export default CommonHeader;
