import {StyleSheet} from 'react-native';
import {DARK_BLUE, FONT} from '../../../../../theme';

const MoreStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemContainer: {
    flexDirection: 'row',
    marginVertical: 20,
  },
  listLabel: {
    ...FONT,
    fontSize: 20,
    color: DARK_BLUE,
    marginLeft: 15,
  },
});

export default MoreStyle;
