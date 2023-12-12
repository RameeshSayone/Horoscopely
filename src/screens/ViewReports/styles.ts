import { Platform, StyleSheet } from 'react-native';
import { screenSize } from '../../constant/screenSize';
import { fontFamily } from '../../constant/fontFamily';

export const styles = StyleSheet.create({
  linearGradient: {
    padding: 20,
    borderRadius: 15,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    paddingBottom: 10,
    borderBottomColor: '#FFFFFF',
    width: screenSize.width - 70,
  },
  titleText: {
    fontFamily: fontFamily.bold,
    fontSize: 15,
    lineHeight: 18,
    color: '#FFFFFF',
  },
  dateText: {
    fontFamily: fontFamily.bold,
    fontSize: 15,
    lineHeight: 18,
    color: '#FFFFFF',
    paddingRight: 20,
  },
  descriptionText: {
    fontFamily: fontFamily.regular,
    fontSize: 12,
    lineHeight: 21,
    color: '#FFFFFF',
    paddingVertical: 10,
  },
  actionContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  viewDetailButton: {
    borderRadius: 18,
    backgroundColor: '#FFFFFF',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewDetailText: {
    fontFamily: fontFamily.medium,
    fontSize: 12,
    lineHeight: 14,
    color: '#007AFF',
  },
  arrowImage: {
    width: 7,
    height: 12,
    transform: [{ rotate: '180deg' }],
    marginLeft: 5,
  },
  container: {
    flex: 1,
  },
  statusBar: {
    translucent: false,
    backgroundColor: '#F2F2F2',
  },
  headerContainer: {
    paddingVertical: 20,
    justifyContent: 'center',
    borderTopWidth: 1,
    marginTop: Platform.OS == 'ios' ? 60 : 20,
    borderTopColor: '#00000030',
    paddingHorizontal: 25,
    borderBottomWidth: 1,
    borderBottomColor: '#00000030',
    backgroundColor: '#F2F2F2',
  },
  headerRow: {
    flexDirection: 'row',
  },
  backButton: {
    width: 18,
    height: 29,
  },
  headerTextContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  headerText: {
    fontFamily: fontFamily.bold,
    fontSize: 15,
    lineHeight: 18,
    color: '#000000',
  },
  dateRangeContainer: {
    flexDirection: 'row',
    paddingBottom: 10,
    paddingTop: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dateRangeTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 0.8,
  },
  dateRangeLabelText: {
    fontFamily: fontFamily.bold,
    fontSize: 12,
    lineHeight: 14,
    color: '#09182B',
  },
  dateRangeText: {
    fontFamily: fontFamily.medium,
    fontSize: 14,
    lineHeight: 16,
    color: '#09182B',
    marginTop: 5,
  },
  closeButton: {
    padding: 10,
    borderRadius: 30,
    backgroundColor: '#7676801F',
    marginHorizontal: 5,
  },
  calendarIcon: {
    flex: 0.2,
    alignItems: 'flex-end',
  },
  calendarImage: {
    width: 27,
    height: 27,
    resizeMode: 'contain',
    tintColor: '#446FFE',
  },
  backgroundImage: {
    height: '100%',
    padding: 25,
  },
  flatList: {
    marginTop: 10,
    marginBottom: Platform.OS == 'ios' ? 200 : 150,
  },
});
