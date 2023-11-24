// RegisterNameFormStyles.ts

import { StyleSheet } from 'react-native';
import { screenSize } from '../../constant/screenSize';
import { fontFamily } from '../../constant/fontFamily';


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F6F8',
  },
  topSection: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  middleSection: {
    flex: 1,
  },
  middleSectionContent: {
    paddingHorizontal: 30,
  },
  bottomSection: {
    paddingVertical: 20,
  },
  backgroundImage: {
    width: screenSize.width,
    height: screenSize.height / 2.5,
    resizeMode: 'stretch',
  },
  headerText: {
    fontFamily: fontFamily.bold,
    fontSize: 18,
    color: '#292929',
    marginTop: 10,
    marginBottom: 10,
    lineHeight: 21,
  },
  title: {
    fontFamily: fontFamily.bold,
    fontSize: 24,
    color: '#292929',
    marginTop: 10,
    marginBottom: 10,
    lineHeight: 29,
  },
  label: {
    fontFamily: fontFamily.semiBold,
    fontSize: 17,
    color: '#060606',
    marginTop: 30,
    marginBottom: 10,
    lineHeight: 20,
  },
  buttonContainer: {
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  skipText: {
    fontFamily: fontFamily.medium,
    fontSize: 14,
    lineHeight: 21,
    color: '#7D7D7D',
    textAlign: 'center',
  },
  infoText: {
    fontFamily: fontFamily.medium,
    fontSize: 11,
    lineHeight: 18,
    color: '#4C4D4D',
    textAlign: 'center',
    marginVertical: 10,
  },
  notificationContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop:35,
    marginBottom:50
  }
});
