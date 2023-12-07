// OtpVerificationStyles.ts
import { StyleSheet } from 'react-native';

import { fontFamily } from '../../constant/fontFamily';
import { screenSize } from '../../constant/screenSize';

const styles = StyleSheet.create({
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
  backgroundImage: {
    width: screenSize.width,
    height: screenSize.height / 2.5,
    resizeMode: 'stretch',
  },
  editIcon: {
    width: 11,
    height: 11,
    marginRight: 3,
  },
  otpSentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 50,
  },
  otpSentTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  editContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    fontFamily: fontFamily.bold,
    fontSize: 12,
    color: '#292929',
    lineHeight: 14,
  },
  subText: {
    fontFamily: fontFamily.medium,
    fontSize: 12,
    color: '#292929',
    lineHeight: 14,
    marginLeft: 5,
  },
  title: {
    fontFamily: fontFamily.semiBold,
    fontSize: 17,
    color: '#060606',
    marginTop: 40,
    marginBottom: 10,
    lineHeight: 20,
  },
  label: {
    fontFamily: fontFamily.medium,
    fontSize: 14,
    color: '#7D7D7D',
    marginTop: 30,
    marginBottom: 10,
    lineHeight: 16,
    textAlign: 'center',
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
  backButton: {
    marginVertical: 15,
  },
  backButtonText: {
    fontFamily: fontFamily.medium,
    fontSize: 14,
    color: '#6FABEF',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
});

export default styles;
