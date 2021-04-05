import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('screen');

const CardItemStyle = StyleSheet.create({
  container: {
    borderRadius: 5,
    height: width * 0.5,
    resizeMode: 'cover',
  },
});

export default CardItemStyle;
