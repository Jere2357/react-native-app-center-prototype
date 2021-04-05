import {StyleSheet} from 'react-native';
import {WHITE, FONT} from '../../../../theme';

const HeaderStyle = StyleSheet.create({
  container: {
    backgroundColor: WHITE,
  },
  headerLeft: {
    flexDirection: 'row',
    marginLeft: 12,
  },
  headerTitle: {
    ...FONT,
    marginRight: 'auto',
    fontSize: 20,
    fontWeight: 'bold',
  },
  arrowLeft: {
    marginLeft: 10,
  },
});

export default HeaderStyle;
