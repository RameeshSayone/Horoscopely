// FocusOfTheDayStyles.ts

import { StyleSheet } from "react-native";
import { fontFamily } from "../../constant/fontFamily";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
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
  zodiacImage: {
    width: 47,
    height: 47,
  },
  headerText: {
    fontFamily: fontFamily.medium,
    fontSize: 18,
    lineHeight: 21,
    color: '#FFFFFF',
    textTransform: 'capitalize',
    marginHorizontal: 15,
    width: 100,
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
  actionContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 25,
  },
  crossImage: {
    width: 120,
    height: 120,
  },
});
