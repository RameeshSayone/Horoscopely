import { StyleSheet } from 'react-native';
import { fontFamily } from '../../constant/fontFamily';
import { screenSize } from '../../constant/screenSize';

 export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  carouselItem: {
    borderRadius: 14,
    overflow: 'hidden',
    marginHorizontal: 15,
    padding: 20,
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center',
  },
  activeItemBackground: {
    backgroundColor: '#FFFFFF10',
  },
  logoContainer: {
    padding: 5,
    backgroundColor: '#FFFFFF20',
    borderRadius: 14,
  },
  logoGradient: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 9,
    width: 95,
    height: 95,
  },
  logoImage: {
    width: 50,
    height: 73,
  },
  youBadge: {
    backgroundColor: '#6F4ED0',
    paddingVertical: 3,
    borderRadius: 9,
    paddingHorizontal: 15,
    bottom: 5,
    position: 'absolute',
    
  },
  itemName: {
    fontSize: 16,
    fontFamily: fontFamily.bold,
    lineHeight: 19,
    color: '#FFFFFF',
    marginTop: 10,
    textAlign: 'center',
  },
  itemDate: {
    fontSize: 13,
    fontFamily: fontFamily.regular,
    lineHeight: 15,
    color: '#FFFFFF',
    marginTop: 5,
    textAlign: 'center',
  },
  youBadgeText:{
    fontSize: 12,
    fontFamily: fontFamily.regular,
    lineHeight: 14,
    color: '#FFFFFF',
  },
  secondItemContainer: {
    marginTop: 60,
  },
  arrowButton: {
    position: 'absolute',
    top: '48%',
  },
  leftArrowButton: {
    left: screenSize.width  / 4.5,
  },
  rightArrowButton: {
    right: screenSize.width / 4.5,
  },
  arrowIcon:{
    width: 14,
    height: 14
  }
});