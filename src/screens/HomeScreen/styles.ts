import { Platform, StyleSheet } from "react-native";
import { fontFamily } from "../../constant/fontFamily";

export const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    container: {
        flex: 1,
    },
    logContainer:{
        marginTop: Platform.OS == 'ios' ? 0 : 30,
        justifyContent: 'center',
        alignItems: 'center',
       
      },
    logo:{
        width: 124,
        height: 40,
        tintColor: '#FFFFFF',
    },
    notificationSec:{
        position: 'absolute',
        right: 30,
    },
    bell:{
        width: 23,
        height: 28,
    },
    badgeSec:{
        borderWidth: 1,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#D04EFF',
        borderColor: '#D04EFF',
        position: 'absolute',
        width: 15,
        height: 15,
        right: -5,
    },
    badgeCount:{
        fontFamily: fontFamily.medium,
        fontSize: 11,
        color: '#FFFFFF',
        textAlign: 'center',
    },
    linearGradient:{
        paddingVertical: 20,
        paddingHorizontal: 20,
        borderRadius: 25,
        justifyContent: 'center',
        margin: 30,
    },
    name:{
        fontFamily: fontFamily.medium,
        fontSize: 18,
        lineHeight: 21,
        color: '#FFFFFF',
    },
    subSec:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 5,
    },
    subtext:{
        fontFamily: fontFamily.light,
        fontSize: 12,
        lineHeight: 14,
        color: '#FFFFFF',
    },
    aries:{
        width: 57,
        height: 57,
        top: -23,
    },
    chartRow:{
        flexDirection: 'row',
    },
    eventSec:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    calendarSec:{
        width: '48%',
        backgroundColor: '#BEA1E2',
        borderWidth: 1,
        borderRadius: 13,
        borderColor: '#FFFFFF',
        padding: 10,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },
    calendarText:{
        fontFamily: fontFamily.regular,
        fontSize: 14,
        lineHeight: 18,
        color: '#FFFFFF',
    },
    calendarSubsec:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
    },
    calendarIcon:{
        width: 24,
        height: 24,
    },
    downArrow:{
        width: 11,
        height: 25,
        transform: [{ rotate: '-90deg' }],
        tintColor: '#FFFFFF',
    },
    focusContainer:{
        width: '48%',
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderRadius: 13,
        borderColor: '#FFFFFF',
        padding: 10,
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },
    focusText:{
        fontFamily: fontFamily.regular,
        fontSize: 14,
        lineHeight: 18,
        color: '#328AEE',
    },
    focusIconSec:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
    },
    sun:{
        width: 24,
        height: 24,
    },
    focusArrow:{
        width: 11,
        height: 25,
        transform: [{ rotate: '-90deg' }],
        tintColor: '#328AEE',
    },
    horoscopeSec:{
        paddingHorizontal: 30,
    },
    horoscopeText:{
        fontFamily: fontFamily.bold,
        fontSize: 19,
        lineHeight: 23,
        color: '#FFFFFF',
    },
    datePickSec:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10,
    },
    datePickSubSec:{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    share:{
        width: 20,
        height: 21,
        resizeMode: 'contain',
    },
    dateCalendar:{
        width: 22,
        height: 22,
        marginLeft: 15,
    },
    dayPickerContainer:{ 
        position: 'relative'
    },
    description:{
        fontFamily: fontFamily.regular,
        fontSize: 14,
        lineHeight: 21,
        color: '#FFFFFF',
      }
  });