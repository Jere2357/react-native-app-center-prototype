import {StyleSheet, Dimensions} from 'react-native';
import {DARK_BLUE, GRAY, WHITE, BLACK, FONT} from '../../../../theme';

const {height, width} = Dimensions.get('screen');

const LandingStyle = StyleSheet.create({
  imageBackground: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 28,
  },
  headContainer: {
    marginTop: 28,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    marginTop: 8,
    width: width * 0.35,
    height: width * 0.1,
  },
  loginButton: {
    width: width * 0.35,
    height: width * 0.13,
    borderWidth: 1,
    borderColor: DARK_BLUE,
  },
  loginTitle: {
    ...FONT,
    color: DARK_BLUE,
    fontWeight: '700',
  },
  textStyle: {
    fontFamily: 'Gotham_Light',
    alignSelf: 'center',
    marginTop: width * 0.5,
    marginBottom: width * 0.1,
    fontSize: 24,
    color: DARK_BLUE,
    fontWeight: '600',
  },
  signUpButton: {
    height: width * 0.15,
    backgroundColor: DARK_BLUE,
    borderRadius: 36,
  },
  signUpTitle: {
    ...FONT,
    color: WHITE,
    fontWeight: '700',
  },
  clearButtonContainer: {
    marginTop: 'auto',
    marginBottom: 32,
    justifyContent: 'space-between',
    height: width * 0.45,
  },
  clearButton: {
    borderRadius: 36,
    shadowColor: BLACK,
    shadowOffset: {
      width: 0,
      height: 21,
    },
    shadowOpacity: 0.55,
    shadowRadius: 14.78,
    elevation: 50,
  },
  clearButtonTitle: {
    ...FONT,
    color: DARK_BLUE,
    marginLeft: 12,
    marginRight: 'auto',
    textAlign: 'justify',
    fontSize: 14,
    fontWeight: '700',
  },
  underlinedText: {
    textDecorationLine: 'underline',
  },
  infoText: {
    ...FONT,
    color: GRAY,
  },
});

export default LandingStyle;
