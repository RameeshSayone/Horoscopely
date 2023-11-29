import { StyleSheet } from 'react-native';
import { fontFamily } from '../../constant/fontFamily';

export const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: 122,
  },
  dropdownButton: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#BF7AF3',
    borderRadius: 36,
    backgroundColor: '#CDA3EF',
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dropdownList: {
    position: 'absolute',
    top: 40,
    right: 0,
    left: 0,
    borderWidth: 1,
    borderColor: '#BF7AF3',
    borderRadius: 5,
    backgroundColor: '#CDA3EF',
  },
  dropdownItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#BF7AF3',
  },
  labelText:{
    fontFamily: fontFamily.bold,
    fontSize: 12,
    lineHeight: 14,
    color: '#FFFFFF',
  },
  downArrow:{
    width: 10,
    height: 10,
    tintColor: '#FFFFFF',
  }
});
