import { StyleSheet } from "react-native";
import { fontFamily } from "../../constant/fontFamily";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F7F6F8',
    },
    backgroundImage: {
      width: 314,
      height: 175,
      resizeMode: 'stretch',
      alignSelf: 'flex-end',
    },
    logoImage: {
      width: 160,
      height: 52,
      position: 'absolute',
      top: 94,
      left: 28,
    },
    contentContainer: {
      marginHorizontal: 30,
    },
    title: {
      fontFamily: fontFamily.bold,
      fontSize: 28,
      color: '#292929',
    },
    subtitle: {
      fontFamily: fontFamily.light,
      fontSize: 28,
      color: '#292929',
    },
    subtitleText: {
      fontFamily: fontFamily.regular,
      fontSize: 15,
      color: '#292929',
      marginVertical: 9,
    },
     buttonText: {
      fontSize: 17,
      color: '#FFFFFF', 
      fontFamily:fontFamily.regular
    },
    googleLabel:{
      fontSize: 17,
      color: '#807E7E', 
      fontFamily:fontFamily.robotoMedium
    },
    facebookLabel:{
      fontSize: 17,
      color: '#FFFFFF', 
      fontFamily:fontFamily.robotoMedium
    },
    appleLabel:{
      fontSize: 17,
      color: '#000000', 
      fontFamily:fontFamily.medium
    },
    emailIcon:{
      width:17,
      height:13,
      position:'absolute',
      top:20,
      left:48,
    },
    smartPhoneIcon:{
      width:13,
      height:20,
      position:'absolute',
      top:17,
      left:48,
    },
    ggogleIcon:{
      width:19,
      height:19,
      position:'absolute',
      top:17,
      left:48,
    },
    facebookIcon:{
      width:18,
      height:18,
      position:'absolute',
      top:17,
      left:48,
    },
    appleIcon:{
      width:16,
      height:18,
      position:'absolute',
      top:17,
      left:48,
    },
    mobileContainer:{
      backgroundColor:'#B342F2'
    },
    emailContainer:{
      backgroundColor:'#328AEE'
    },
    googleContainer:{
      backgroundColor:'#FFFFFF',
      shadowColor: "#00000080",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    facebookContainer:{
      backgroundColor:'#4267B2'
    },
    appleContainer:{
      backgroundColor:'#FFFFFF',
      shadowColor: "#00000080",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
  
  
    skipButton: {
      marginVertical: 10,
    },
    skipButtonText: {
      fontFamily: fontFamily.medium,
      fontSize: 14,
      color: '#7D7D7D',
      textTransform: 'uppercase',
      textAlign: 'center',
    },
    agreementText: {
      fontFamily: fontFamily.medium,
      fontSize: 14,
      color: '#000000',
      textAlign: 'center',
    },
    termsContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: 10,
    },
    termsLink: {
      fontFamily: fontFamily.regular,
      fontSize: 13,
      color: '#328AEE',
      textDecorationLine: 'underline',
    },
    andText: {
      fontFamily: fontFamily.regular,
      fontSize: 13,
      color: '#09182B',
      marginHorizontal: 5,
    },
    privacyTextContainer: {
      marginVertical: 15,
    },
    privacyText: {
      fontFamily: fontFamily.regular,
      fontSize: 11,
      color: '#000000',
      textAlign: 'center',
    },
    bottomImage: {
      width: 171,
      height: 51,
      resizeMode: 'stretch',
      alignSelf: 'center',
    },
  });
  
  
  