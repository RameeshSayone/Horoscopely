import { StyleSheet } from "react-native";
import { screenSize } from "../../constant/screenSize";
import { fontFamily } from "../../constant/fontFamily";

export const styles = StyleSheet.create({
    overlay: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    container: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: [{ translateX: -(screenSize.width - 60) / 2 }, { translateY: -100 }],
      backgroundColor: '#FFFFFF',
      borderRadius: 14,
      alignItems:'center',
      justifyContent:'center',
      width: screenSize.width - 60 
    },
    message: {
      fontSize:13,
      fontFamily:fontFamily.regular,
      lineHeight:16,
      letterSpacing:-0.1,
      marginBottom:25,
      marginTop:5,
      paddingHorizontal:20,
      color:'#000000'
    },
    title:{
      fontSize:17,
      fontFamily:fontFamily.semiBold,
      lineHeight:22,
      letterSpacing:-0.5,
      paddingTop:20,
      paddingHorizontal:20,
      color:'#000000'
    },
    cancelButton: {
      padding: 10,
      alignItems: 'center',
      width:"100%",
      borderTopWidth:1,
      borderTopColor:'#00000050'
    },
    cancelText: {
      fontSize:17,
      fontFamily:fontFamily.semiBold,
      lineHeight:22,
      letterSpacing:-0.41,
      color:'#007AFF'
    },
  });
  