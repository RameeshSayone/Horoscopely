import { StyleSheet } from "react-native";
import { screenSize } from "../../constant/screenSize";
import { fontFamily } from "../../constant/fontFamily";

export const styles=StyleSheet.create({
    modalBody:{
        flex: 1,
        justifyContent: 'flex-end',
    },
    modalContent:{
        backgroundColor: 'white',
        height: 0.5 * screenSize.height,
        borderTopStartRadius:10,
        borderTopEndRadius:10,
    },
    item:{
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    itemText:{
        fontFamily:fontFamily.regular,
        fontSize:15,
        lineHeight:18,
        color:'#545353',
    }
})