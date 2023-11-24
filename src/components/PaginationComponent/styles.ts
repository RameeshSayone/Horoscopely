import { StyleSheet } from "react-native";
import { fontFamily } from "../../constant/fontFamily";

export const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 30,
    },
    leftContent: {
      flex: 1,
    },
    leftContentText: {
      fontFamily: fontFamily.medium,
      fontSize: 15,
      color: '#09182B',
      lineHeight:18
    },
    rightContent: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    circle: {
      width: 8,
      height: 8,
      borderRadius: 6,
      marginHorizontal: 4,
    },
    activeCircle: {
      backgroundColor: '#328AEE', // Change the color for the active circle
    },
    inactiveCircle: {
      backgroundColor: '#8EBDF3', // Change the color for inactive circles
    },
  });