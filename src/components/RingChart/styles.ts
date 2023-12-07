import { StyleSheet } from "react-native";
import { fontFamily } from "../../constant/fontFamily";

export const styles = StyleSheet.create({
    chart: {
      borderRadius: 16,
      top: -20,
    },
    centeredText: {
      alignItems: 'center',
      position: 'absolute',
      top: '18%',
      left: '35%',
    },
    percentText: {
      fontSize: 13,
      fontFamily: fontFamily.medium,
      color: '#FFFFFF',
      lineHeight: 15,
    },
    labelRow: {
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    labelText: {
      fontSize: 12,
      fontFamily: fontFamily.medium,
      lineHeight: 14,
      color: '#FFFFFF',
      top: -15,
    },
  });