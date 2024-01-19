import { StyleSheet } from 'react-native';
import { fontFamily } from '../../constant/fontFamily';

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#FFFFFF',
    borderRadius: 19,
    marginHorizontal: 15,
    marginVertical: 25,
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#FFFFFF',
  },
  cell: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#FFFFFF',
    borderRightWidth: 1,
  },
  columnText: {
    fontFamily: fontFamily.bold,
    fontSize: 13,
    lineHeight: 16,
    color: '#FFFFFF',
  },
  cellText: {
    fontFamily: fontFamily.regular,
    fontSize: 11,
    lineHeight: 13,
    color: '#FFFFFF',
  },
});

export default styles;
