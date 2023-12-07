import { StyleSheet } from "react-native"
import { fontFamily } from "../../constant/fontFamily";
import { screenSize } from "../../constant/screenSize";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 20,
      backgroundColor: '#F2F2F2',
    },
    backButton: {
      width: 18,
      height: 29,
    },
    title: {
      fontFamily: fontFamily.bold,
      fontSize: 15,
      lineHeight: 18,
      color: '#000000',
    },
    settingsIcon: {
      width: 25,
      height: 25,
    },
    listItem: {
      backgroundColor: '#FFFFFF',
      borderRadius: 5,
      marginBottom: 10,
      width: '100%',
      padding: 15,
    },
    listItemContent: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingLeft: 15,
    },
    listItemTitle: {
      fontFamily: fontFamily.semiBold,
      fontSize: 14,
      lineHeight: 21,
      color: '#09182B',
    },
    listItemTime: {
      fontFamily: fontFamily.semiBold,
      fontSize: 11,
      lineHeight: 21,
      color: '#09182B',
    },
    listItemDescriptionContainer: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      marginVertical: 5,
    },
    unreadIndicator: {
      width: 10,
      height: 10,
      backgroundColor: '#D04EFF',
      borderRadius: 20,
      marginRight: 5,
    },
    listItemDescription: {
      fontFamily: fontFamily.regular,
      fontSize: 12,
      lineHeight: 19,
      color: '#545353',
      bottom: 5,
    },
    detailViewContainer: {
      backgroundColor: '#FFFFFF',
      borderRadius: 5,
      margin: 25,
      width: screenSize.width - 50,
      padding: 15,
    },
    detailViewContent: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  });
  
  