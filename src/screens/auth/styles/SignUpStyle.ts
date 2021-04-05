import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('screen');

const SignUpStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxContainer: {
    flexDirection: 'row',
  },
  checkboxLabel: {
    fontSize: 16,
    width: '85%',
    fontWeight: '100',
    color: '#2B2D33',
  },
  privacyLabel: {
    color: '#2A3D99',
  },
  signUpButton: {
    height: width * 0.15,
    marginVertical: 30,
    marginHorizontal: 5,
    backgroundColor: '#201751',
    borderRadius: 4,
  },
});

export default SignUpStyle;
