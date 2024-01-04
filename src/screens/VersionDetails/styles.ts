import { StyleSheet } from 'react-native';
import { fontFamily } from '../../constant/fontFamily';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  appName: {
    fontFamily: fontFamily.medium,
    fontSize: 18,
    lineHeight: 22,
    color: '#FFFFFF',
  },
  versionText: {
    fontFamily: fontFamily.regular,
    fontSize: 13,
    lineHeight: 21,
    color: '#FFFFFF',
    marginVertical: 5,
  },
  logo: {
    width: 168,
    height: 54,
    resizeMode: 'contain',
    tintColor: '#FFFFFF',
    marginVertical: 15,
  },
  copyrightText: {
    fontFamily: fontFamily.light,
    fontSize: 12,
    lineHeight: 22,
    color: '#FFFFFF',
    marginVertical: 5,
    opacity: 0.5,
  },
});