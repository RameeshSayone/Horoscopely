import { StyleSheet } from 'react-native';
import { screenSize } from '../../constant/screenSize';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  datePicker: {
    backgroundColor: '#F7F6F8',
    width: screenSize.width - 60,
  },
  label: {
    marginBottom: 10,
  },
});
