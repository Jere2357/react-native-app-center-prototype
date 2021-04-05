import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import Container from '../../../components/Layout/Container';
import {
  LoansIcon,
  CardSettingsIcon,
  AccountSettingsIcon,
  ChatIcon,
  LogoutIcon,
} from '../../../components/Icons';
import DashboardHeader from './common/DashboardHeader';
import routes from '../../../navigation/routes';
import styles from './styles/MoreStyle';

const More = ({navigation}) => {
  const Item = (icon: any, label: string, onItemClick) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => onItemClick()}>
      {icon}
      <Text style={styles.listLabel}>{label}</Text>
    </TouchableOpacity>
  );

  const logout = () => {
    navigation.navigate(routes.LANDING);
  };

  return (
    <Container>
      <DashboardHeader />
      {Item(<LoansIcon />, 'Apply for Loans', null)}
      {Item(<CardSettingsIcon />, 'Card Settings & History', null)}
      {Item(<AccountSettingsIcon />, 'Account Settings', null)}
      {Item(<ChatIcon />, 'Contact Us', null)}
      {Item(<LogoutIcon />, 'Log Out', logout)}
    </Container>
  );
};

export default More;
