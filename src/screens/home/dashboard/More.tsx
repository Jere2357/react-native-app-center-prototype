import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import Container from '../../../components/Layout/Container';
import {
  LoansIcon,
  CardSettingsIcon,
  AccountSettingsIcon,
  ChatIcon,
  LogoutIcon,
} from '../../../components/Icons';
import {logoutUser} from '../../../store/modules/auth/action';
import {RootState} from '../../../store/modules/combinedReducers';
import DashboardHeader from './common/DashboardHeader';
import routes from '../../../navigation/routes';
import styles from './styles/MoreStyle';

const More = ({navigation}: any) => {
  const auth = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  const Item = (icon: any, label: string, onItemClick) => (
    <TouchableOpacity style={styles.itemContainer} onPress={onItemClick}>
      {icon}
      <Text style={styles.listLabel}>{label}</Text>
    </TouchableOpacity>
  );

  const logout = () => {
    dispatch(logoutUser());
    navigation.navigate(routes.LANDING);
  };

  return (
    <Container>
      <DashboardHeader />
      {Item(<LoansIcon />, 'Apply for Loans', 'nan')}
      {Item(<CardSettingsIcon />, 'Card Settings & History', () =>
        console.log('Clicked'),
      )}
      {Item(<AccountSettingsIcon />, 'Account Settings', () =>
        console.log('Clicked'),
      )}
      {Item(<ChatIcon />, 'Contact Us', () => console.log('Clicked'))}
      {Item(<LogoutIcon />, 'Log Out', logout)}
    </Container>
  );
};

export default More;
