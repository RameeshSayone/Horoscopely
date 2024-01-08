import { StyleSheet } from 'react-native';
import { fontFamily } from '../../constant/fontFamily';
import { Platform } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    padding: 25,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: Platform.OS === 'ios' ? 40 : 20,
  },
  arrowIcon: {
    width: 18,
    height: 29,
    tintColor: '#FFFFFF',
  },
  titleText: {
    fontFamily: fontFamily.bold,
    fontSize: 15,
    lineHeight: 18,
    color: '#FFFFFF',
  },
  shareIcon: {
    width: 19,
    height: 21,
    resizeMode: 'contain',
  },
  background: {
    marginHorizontal: 25,
    padding: 15,
    alignItems: 'center',
    flex: 1,
    marginBottom: Platform.OS === 'ios' ? 30 : 20,
  },
  backgroundImg: {
    borderRadius: 10,
  },
  horoscopeText: {
    fontFamily: fontFamily.medium,
    fontSize: 18,
    lineHeight: 21,
    color: '#007AFF',
    textTransform: 'uppercase',
    marginVertical: 15,
    textAlign:'center'
  },
  ringChartContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  horoscopeDetailText: {
    fontFamily: fontFamily.regular,
    fontSize: 14,
    lineHeight: 21,
    color: '#000000',
    marginVertical: 15,
  },
});
