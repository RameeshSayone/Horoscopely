import { StyleSheet } from "react-native";
import { screenSize } from "../../constant/screenSize";
import { fontFamily } from "../../constant/fontFamily";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    backgroundImage: {
      position: 'absolute',
      top: 0,
      left: -15,
      width: screenSize.width+25,
      height: screenSize.height+5,
      resizeMode:'cover'
    },
    middleImage: {
      width: 188,
      height: 188,
    },
    middleLogo:{
      width: 39,
      height: 46,
      position: 'absolute',
    },
    bottomContainer: {
      position: 'absolute',
      bottom: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    loadingText: {
      fontSize: 20,
      fontFamily:fontFamily.medium,
      color: '#FFFFFF',
      lineHeight:22
    },
  });