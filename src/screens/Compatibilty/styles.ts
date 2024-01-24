import { StyleSheet } from 'react-native';
import { screenSize } from '../../constant/screenSize';
import { fontFamily } from '../../constant/fontFamily';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontFamily: fontFamily.medium,
    fontSize: 19,
    lineHeight: 23,
    color: '#FFFFFF',
    marginBottom: 40,
    marginTop: 60,
  },
  buttonContainer: {
    padding: 15,
    marginTop: 40,
    marginBottom: 40,
    backgroundColor: '#FFFFFF',
    borderRadius: 26,
    width: screenSize.width - 120,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 13,
    fontFamily: fontFamily.medium,
    lineHeight: 15,
    color: '#328AEE',
  },
});