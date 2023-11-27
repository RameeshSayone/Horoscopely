import { StyleSheet } from "react-native";
import { screenSize } from "../../constant/screenSize";
import { fontFamily } from "../../constant/fontFamily";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-between',
      backgroundColor: '#FFFFFF',
      zIndex: 10,
    },
    topSection: {
      alignItems: 'center',
      zIndex: 10,
    },
    middleSection: {
      flex: 1,
      backgroundColor: 'white',
      zIndex: 10,
    },
    middleContent: {
      padding: 30,
    },
    backgroundImage: {
      width: screenSize.width,
      height: screenSize.width * 0.6,
      resizeMode: 'stretch',
      alignSelf: 'flex-end',
    },
    logoImage: {
      width: (screenSize.width - 30) * 0.5,
      height: 60,
      alignSelf: 'flex-start',
      left: -9,
    },
    mobileNumberText: {
      fontFamily: fontFamily.semiBold,
      fontSize: 17,
      color: '#060606',
      marginTop: 30,
      marginBottom: 15,
    },
    inputContainer: {
      flexDirection: 'row',
    },
    textBoxContainer: {
      width: screenSize.width - 60,
    },
    buttonWrapper: {
      elevation: 10,
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
      color: '#7D7D7D',
      textTransform: 'uppercase',
      textAlign: 'center',
    },
    backgroundBottomImage: {
      width: screenSize.width,
      height: screenSize.width * 0.6,
      resizeMode: 'stretch',
      alignSelf: 'center',
    },
  });
  