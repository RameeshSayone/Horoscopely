import { StyleSheet } from "react-native";
import { fontFamily } from "../../constant/fontFamily";

export const styles = StyleSheet.create({
    radioButtonRow: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      marginVertical: 8,
      width:'50%'
    },
    radioButtonContainer: {
      borderWidth: 2,
      borderColor: '#328AEE',
      borderRadius: 10,
      width:20,
      height:20,
      marginRight: 8,
      justifyContent:'center',
      alignItems:'center'
    },
    radioButton: {
      width:12,
      height:12,
    },
    radioButtonSelected: {
      backgroundColor:"#B342F2",
      borderRadius: 10,
      width:12,
      height:12,
      borderColor:'B342F2'
    },
    radioButtonText: {
      fontSize: 15,
      fontFamily:fontFamily.regular,
      color:'#09182B',
      lineHeight:18
    },
    container:{
      flexDirection:'row',
      flexWrap:'wrap'
    }
  });