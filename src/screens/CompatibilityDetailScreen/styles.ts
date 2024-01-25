import { StyleSheet } from "react-native";
import { fontFamily } from "../../constant/fontFamily";
import { screenSize } from "../../constant/screenSize";

export const styles = StyleSheet.create({
  mainSec: { 
    flex: 1 
  },
  mainView: {
    margin: 25,
  },
  logoContainer: {
    padding: 5,
    backgroundColor: '#FFFFFF20',
    borderRadius: 14,
  },
  logoGradient: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 9,
    width: 95,
    height: 95,
  },
  logoImage: {
    width: 50,
    height: 73,
  },
  youBadge: {
    backgroundColor: '#6F4ED0',
    paddingVertical: 3,
    borderRadius: 9,
    paddingHorizontal: 15,
    bottom: 5,
    position: 'absolute',
  },
  itemName: {
    fontSize: 16,
    fontFamily: fontFamily.bold,
    lineHeight: 19,
    color: '#FFFFFF',
    marginTop: 10,
    textAlign: 'center',
  },
  itemDate: {
    fontSize: 13,
    fontFamily: fontFamily.regular,
    lineHeight: 15,
    color: '#FFFFFF',
    marginTop: 5,
    textAlign: 'center',
  },
  youBadgeText: {
    fontSize: 12,
    fontFamily: fontFamily.regular,
    lineHeight: 14,
    color: '#FFFFFF',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusSign: {
    fontSize: 25,
    fontFamily: fontFamily.bold,
    lineHeight: 28,
    color: '#FFFFFF',
    marginTop: 5,
    textAlign: 'center',
    marginHorizontal: 20,
    bottom: 30,
  },
  overallContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 50,
  },
  overallLabel: {
    fontSize: 17,
    fontFamily: fontFamily.bold,
    lineHeight: 20,
    color: '#FFFFFF',
  },
  description: {
    fontSize: 13,
    fontFamily: fontFamily.regular,
    lineHeight: 20,
    color: '#FFFFFF',
    marginVertical: 20,
  },
  linearGradient: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 19,
    maxHeight: screenSize.height / 2.5,
  },
  tabRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tabButton: {
    width: (screenSize.width - 110) / 3,
  },
  tabText: {
    fontSize: 14,
    lineHeight: 16,
    color: '#FFFFFF',
  },
  activeUnderline: {
    width: (screenSize.width - 90) / 3,
    alignItems: 'center',
    borderRadius: 4,
    marginVertical: 5,
  },
  tabContentText: {
    fontSize: 13,
    fontFamily: fontFamily.regular,
    lineHeight: 20,
    color: '#FFFFFF',
  }
});
