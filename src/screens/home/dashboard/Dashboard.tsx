import React, {useEffect, useState} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import ViewPager from 'react-native-pager-view';
import {useDispatch, useSelector} from 'react-redux';

import {RootState} from '../../../store/modules/combinedReducers';
import {getDetails} from '../../../store/modules/dashboard/action';

import Container from '../../../components/Layout/Container';
import {FormButton} from '../../../components/Form';
import {VisaCard, CardItem} from '../../../components/Card';
import {BellIcon, WidthrawIcon} from '../../../components/Icons';
import DashboardHeader from './common/DashboardHeader';
import styles from './styles/DashboardStyle';

const Dashboard = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state: RootState) => state.auth);
  const dashboard = useSelector((state: RootState) => state.dashboard);
  const [details, setDetails] = useState(false);

  useEffect(() => {
    console.log('status ', auth);
    setDetails(true);
  }, []);

  useEffect(() => {
    handleGetDetails();
  }, [details]);

  const handleGetDetails = () => {
    dispatch(getDetails(auth.result.guid));
    console.log('dashboard ', dashboard);
  };

  const BalanceViewPager = () => (
    <View style={styles.pagerContainer}>
      <ViewPager style={styles.pager} initialPage={0}>
        <View key="1">
          <CardItem>
            {AccountBalanceItem(
              'Savings • 0190000',
              '₱ 32,800.00',
              '₱ 22,800.00',
            )}
          </CardItem>
        </View>
        <View key="2">
          <CardItem>
            {AccountBalanceItem('Capcon • 0199630', '₱ 200.50', '₱ 100.00')}
          </CardItem>
        </View>
        <View key="3">
          <CardItem>
            {AccountBalanceItem('CASA • 1199620', '₱ 0.00', '₱ 0.00')}
          </CardItem>
        </View>
      </ViewPager>
    </View>
  );

  const AccountBalanceItem = (
    type: string,
    OSBalance: string,
    WDBalance: string,
  ) => (
    <View style={styles.cardDetails}>
      <Text style={styles.balanceTitle}>{type}</Text>
      <Text style={styles.balance}>{OSBalance}</Text>
      <Text style={styles.balanceSubLabel}>Outstanding Balance</Text>
      <Text style={styles.balance}>{WDBalance}</Text>
      <Text style={styles.balanceSubLabel}>Withdrawable Balance</Text>
    </View>
  );

  return (
    <Container style={{backgroundColor: '#F7F7F7'}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <DashboardHeader />
        <Text style={styles.getYours}>Get yours now!</Text>
        <VisaCard />
        <View style={styles.widthrawContainer}>
          <WidthrawIcon />
          <Text style={styles.widthrawLabel}>
            Withdraw cash from any UnionBank/ Bancnet/ Visa ATM
          </Text>
        </View>
        <View style={styles.applyButtonContainer}>
          <FormButton
            title="Apply for Visa Card"
            type="outline"
            buttonStyle={styles.applyButton}
            titleStyle={styles.applyTitle}
          />
        </View>
        <Text style={styles.balanceTitle}>Account Balances</Text>
        {BalanceViewPager()}
        <Text style={styles.balanceTitle}>Active Loans</Text>
        {BalanceViewPager()}
      </ScrollView>
    </Container>
  );
};

export default Dashboard;
