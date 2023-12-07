import { StyleSheet } from "react-native";
import { fontFamily } from "../../constant/fontFamily";

export const styles = StyleSheet.create({
    imageBackground: {
      flex: 1,
    },
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#2caff1',
      borderRadius: 10,
      paddingHorizontal: 15,
      paddingVertical: 20,
      marginTop: 50,
      marginHorizontal: 25,
    },
    ariesImage: {
      width: 47,
      height: 47,
    },
    adviceText: {
      fontFamily: fontFamily.medium,
      fontSize: 18,
      lineHeight: 21,
      color: '#FFFFFF',
      textTransform: 'capitalize',
      marginHorizontal: 15,
      flex: 0.9,
    },
    shareImage: {
      width: 20,
      height: 21,
    },
    scrollView: {
      padding: 25,
    },
    paragraphText: {
      fontFamily: fontFamily.regular,
      fontSize: 14,
      lineHeight: 24,
      color: '#FFFFFF',
      textTransform: 'capitalize',
    },
    marginVertical50: {
      marginVertical: 50,
    },
    crossImageContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 25,
    },
    crossImage: {
      width: 120,
      height: 120,
    },
  });