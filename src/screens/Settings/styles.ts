import { StyleSheet } from 'react-native';
import { screenSize } from '../../constant/screenSize';
import { fontFamily } from '../../constant/fontFamily';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
      },
      header: {
        backgroundColor: '#F2F2F2',
        borderColor: '#00000026',
        paddingHorizontal: 25,
        paddingVertical: 30,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      },
      backButtonContainer: {
        position: 'absolute',
        top: 25,
        left: 25,
      },
      backButton: {
        width: 18,
        height: 29,
      },
      titleContainer: {
        alignItems: 'center',
        justifyContent: 'center',
      },
      title: {
        fontFamily: fontFamily.bold,
        fontSize: 15,
        lineHeight: 18,
        color: '#000000',
        textAlign: 'center',
      },
      contentContainer: {
        flex: 1,
      },
      notificationHeader: {
        paddingHorizontal: 25,
        paddingTop: 30,
        paddingBottom: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#00000026',
      },
      notificationHeaderText: {
        fontFamily: fontFamily.regular,
        fontSize: 13,
        lineHeight: 21,
        color: '#3C3C4399',
        textTransform: 'uppercase',
        letterSpacing: -0.1,
      },
      scrollView: {
        flex: 1,
        width: screenSize.width,
      },
      separator: {
        height: 1,
        backgroundColor: '#e0e0e0',
        marginLeft: 20,
      },
      cardContainer: {
        padding: 16,
        marginLeft: 20,
        width: screenSize.width - 50,
      },
      rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      carDtitle: {
        fontSize: 17,
        fontFamily: fontFamily.regular,
        color: '#000000',
        marginBottom: 8,
        letterSpacing: -0.41,
      },
      description: {
        fontSize: 11,
        fontFamily: fontFamily.regular,
        color: '#09182B',
        width: '70%',
      },
      subTitle: {
        flex: 1,
        fontSize: 13,
        fontFamily: fontFamily.regular,
        color: '#09182B',
        marginBottom: 5,
      },
      arrowContainer: {
        top: -15,
      },
      arrowIcon: {
        width: 10,
        height: 16,
        tintColor: '#3C3C434D',
        transform: [{ rotate: '180deg' }],
      },
      toggleContainer: {
        width: 44,
        height: 27,
        borderRadius: 25,
        top: -10,
      },
      toggleCircle: {
        width: 23,
        height: 23,
        borderRadius: 20,
        right: 0,
      },
});
