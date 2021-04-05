import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('screen');

const LoginStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButton: {
    height: width * 0.15,
    marginVertical: 30,
    marginHorizontal: 5,
    backgroundColor: '#201751',
    borderRadius: 4,
  },
});

export default LoginStyle;
