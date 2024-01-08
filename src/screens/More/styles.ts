import { StyleSheet } from "react-native";
import { screenSize } from "../../constant/screenSize";
import { fontFamily } from "../../constant/fontFamily";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-end',
    },
    mainContainer: {
      backgroundColor: '#FFFFFFBA',
      height: screenSize.height * 0.8,
      width: screenSize.width,
      padding: 25,
      paddingRight: 0,
      borderTopEndRadius: 30,
      borderTopStartRadius: 30,
      alignItems: 'center',
    },
    headerContainer: {
      alignItems:'center'
    },
    headerLine: {
      height: 4,
      width: 36,
      backgroundColor: '#FFFFFF',
      borderRadius: 30,
      borderWidth: 1,
      borderColor: '#FFFFFF',
      top: -15,
    },
    logoImage: {
      width: 96,
      height: 31,
    },
    contactText: {
      fontFamily: fontFamily.regular,
      fontSize: 11,
      lineHeight: 13,
      color: '#313131',
      marginVertical: 5,
    },
    separator: {
      height: 10,
      borderBottomColor: '#FFFFFFBA',
      borderBottomWidth: 1,
    },
    itemContainer: {
      width: screenSize.width - 25,
    },
    itemContent: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      paddingVertical: 10,
      marginTop: 5,
    },
    itemImage: {
      width: 22,
      height: 21,
      resizeMode: 'contain',
    },
    itemText: {
      fontFamily: fontFamily.regular,
      fontSize: 15,
      lineHeight: 18,
      color: '#09182B',
      marginLeft: 10,
    },
  });