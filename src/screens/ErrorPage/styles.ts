import { StyleSheet } from "react-native";
import { fontFamily } from "../../constant/fontFamily";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F6F8',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 50,
  },
  errorImage: {
    width: '100%',
    height: 173,
    resizeMode: 'contain',
  },
  pageTitle: {
    fontFamily: fontFamily.medium,
    fontSize: 18,
    lineHeight: 21,
    color: '#09182B',
    marginTop: 40,
  },
  pageDescription: {
    fontFamily: fontFamily.regular,
    fontSize: 13,
    lineHeight: 15,
    color: '#09182B',
    marginTop: 10,
  },
  continueButtonContainer: {
    borderRadius: 30,
    marginVertical: 40,
  },
  linearGradient: {
    paddingVertical: 12,
    paddingHorizontal: 60,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: fontFamily.semiBold,
    fontSize: 12,
    lineHeight: 14,
    color: '#FFFFFF',
  },
});