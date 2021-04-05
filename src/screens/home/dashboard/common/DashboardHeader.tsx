import React from 'react';
import {View, Image} from 'react-native';

import {BellIcon} from '../../../../components/Icons';
import styles from '../styles/DashboardStyle';

const DashboardHeader = () => (
  <View style={styles.headContainer}>
    <Image
      style={styles.image}
      source={require('../../../../../assets/psslai-icon.png')}
    />
    <BellIcon size={styles.bellIcon.height} />
  </View>
);

export default DashboardHeader;
