import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('screen');

const NoCardStyle = StyleSheet.create({
  container: {
    height: width * 0.55,
  },
  cardDetails: {
    margin: 20,
    width: '90%',
  },
  title: {
    color: '#fff',
    fontSize: 20,
  },
  secureCode: {
    color: '#fff',
    fontSize: 16,
  },
});

export default NoCardStyle;
