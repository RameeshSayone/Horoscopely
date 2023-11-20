import { Platform, StyleSheet } from 'react-native';
import { fontFamily } from '../../constant/fontFamily';

export const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  inputContainer: {
    width: 80,
  },
  arrowIcon: {
    width: 15,
    height: 15,
    tintColor: '#000000',
    position: 'absolute',
    right: 10,
    top: Platform.OS === 'ios' ? 30 : 36,
    bottom: 0,
  },
  dropdownList: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    shadowColor: "#00000060",
    borderColor: '#95959529',
    borderWidth: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    position: 'absolute',
    top: Platform.OS === 'ios' ? 70 : 80,
    width: 80,
    zIndex: 1,
    flex: 1,
  },
  optionItem: {
    padding: 17,
    fontSize: 13,
    fontFamily: fontFamily.regular,
    color: '#000000',
    borderBottomColor: '#95959529',
    borderBottomWidth: 1,
    zIndex: 1,
  },
});