import {StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('screen');

const DashboardStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headContainer: {
    marginTop: 28,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  widthrawContainer: {
    marginVertical: width * 0.08,
    flexDirection: 'row',
  },
  image: {
    width: width * 0.35,
    height: width * 0.1,
  },
  bellIcon: {
    height: width * 0.08,
  },
  getYours: {
    marginVertical: width * 0.08,
    fontSize: 32,
    fontWeight: 'bold',
  },
  widthrawLabel: {
    color: '#201751',
    marginLeft: 12,
    width: '85%',
  },
  applyButtonContainer: {
    alignSelf: 'center',
    marginTop: width * 0.06,
    marginBottom: width * 0.15,
  },
  applyButton: {
    width: width * 0.5,
    height: width * 0.13,
    borderWidth: 1,
    borderColor: '#201751',
  },
  applyTitle: {
    color: '#201751',
    fontWeight: 'normal',
  },
  cardDetails: {
    margin: 20,
    width: '90%',
  },
  pagerContainer: {
    height: width * 0.7,
    justifyContent: 'center',
  },
  pager: {
    height: width * 0.6,
  },
  balanceTitle: {
    fontSize: 16,
    color: '#201751',
  },
  balance: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#201751',
  },
  balanceSubLabel: {
    color: '#909196',
  },
});

export default DashboardStyle;
