
import { StyleSheet } from 'react-native';
import { screenSize } from '../../constant/screenSize';
import { fontFamily } from '../../constant/fontFamily';

const styles = StyleSheet.create({
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
  linearGradient: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 15,
    width: screenSize.width - 50,
  },
  cardTitle: {
    fontFamily: fontFamily.bold,
    fontSize: 14,
    lineHeight: 14,
    color: '#FFFFFF',
  },
  cardDescription: {
    fontFamily: fontFamily.regular,
    fontSize: 12,
    lineHeight: 21,
    color: '#FFFFFF',
    paddingTop: 10,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#FFFFFF',
    paddingBottom: 10,
  },
  shareIcon: {
    width: 21,
    height: 21,
    resizeMode: 'contain',
  },
});

export default styles;
