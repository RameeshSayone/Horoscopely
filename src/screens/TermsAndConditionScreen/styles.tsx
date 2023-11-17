import { StyleSheet } from "react-native";
import { fontFamily } from "../../constant/fontFamily";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'#FFFFFF'
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      padding:20,
      backgroundColor:'#F2F2F2'
    },
    headerText: {
      fontSize: 15,
      fontFamily: fontFamily.bold,
      color:'#0D0D0D'
    },
    closeButton: {
      padding: 10,
      position:'absolute',
      right:20
    },
    closeIcon: {
      width:15,
      height:15
    },
    content: {
      padding:30,
      paddingBottom:60
    },
    paragraph: {
      fontSize: 13,
      lineHeight: 21,
      color:'#2A2A2A',
      marginBottom:30
    },
  });