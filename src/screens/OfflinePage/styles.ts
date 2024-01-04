import { Platform, StyleSheet } from "react-native";
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
  closeButton: {
    padding: 10,
    position:'absolute',
    right:20,
    top:Platform.OS=='ios'?50: 20,
    backgroundColor:'#DEDADA',
    borderRadius:50
  },
  closeIcon: {
    width:15,
    height:15,
    tintColor:'#FFFFFF'

  },
});