import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    buttonContainer: {
      borderRadius: 30,
      overflow: 'hidden',
      marginVertical:15,
      padding:15
    },
    innerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      marginRight: 10,
     
      resizeMode:'contain'
    },
  });