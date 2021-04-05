import { StyleSheet } from 'react-native';

const InputStyle = StyleSheet.create({
  container: {
    paddingHorizontal: 15, 
    paddingVertical: 5, 
    borderWidth: 1,
    borderColor: '#D1D5DD',
    borderRadius: 5,
  },
  activeInput: {
    paddingHorizontal: 15, 
    paddingVertical: 5, 
    borderWidth: 1,
    borderColor: '#2B2D33',
    borderRadius: 5,
  }, 
  label: {
    fontSize: 14,
    fontWeight: '100',
    color: '#2B2D33'  
  }
});

export default InputStyle;