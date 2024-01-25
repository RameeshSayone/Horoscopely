import { Platform, StyleSheet } from "react-native";
import { fontFamily } from "../../constant/fontFamily";

export const styles=StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        padding: 25,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: Platform.OS === 'ios' ? 40 : 20,
      },
      headerText: {
        fontFamily: fontFamily.bold,
        fontSize: 15,
        lineHeight: 18,
        color: '#FFFFFF',
      },
})