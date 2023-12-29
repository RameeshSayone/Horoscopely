import { StyleSheet } from "react-native";
import { fontFamily } from "../../constant/fontFamily";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    carouselItem: {
      borderRadius: 14,
      overflow: 'hidden',
      backgroundColor: '#FFFFFFFC',
      height: '90%',
      marginHorizontal: 15,
      justifyContent: 'center',
      alignItems: 'center',
    },
    contentContainer: {
      height: '50%',
      padding: 10,
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    titleText: {
      fontSize: 20,
      fontFamily: fontFamily.bold,
      lineHeight: 24,
      color: '#682281',
    },
    typeText: {
      fontSize: 13,
      fontFamily: fontFamily.medium,
      lineHeight: 15,
      color: '#682281',
      marginVertical: 5,
    },
    linearGradient: {
      height: '50%',
      padding: 10,
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 14,
    },
    overlayLine: {
      backgroundColor: '#FFFFFF',
      width: '60%',
      height: 3,
      position: 'absolute',
      top: 3,
    },
    overlayText: {
      fontSize: 13,
      fontFamily: fontFamily.medium,
      lineHeight: 15,
      color: '#FFFFFF',
      marginVertical: 5,
    },
    priceText: {
      fontSize: 20,
      fontFamily: fontFamily.bold,
      lineHeight: 24,
      color: '#FFFFFF',
      marginVertical: 5,
    },
    planContainer: {
      paddingHorizontal: 10,
      paddingVertical: 5,
      backgroundColor: '#FFFFFF7A',
      borderRadius: 14,
      marginTop: 10,
      borderWidth: 1,
      borderColor: '#FFFFFF33',
    },
    planText: {
      fontSize: 12,
      fontFamily: fontFamily.regular,
      lineHeight: 14,
      color: '#1B1D20',
    },
  });