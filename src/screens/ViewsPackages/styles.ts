import { Platform, StyleSheet } from "react-native";
import { fontFamily } from "../../constant/fontFamily";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
  featureContainer: {
    borderRadius: 14,
    borderColor: '#FFFFFF',
    backgroundColor: '#FFFFFF70',
    borderWidth: 1,
    padding: 20,
    margin: 20,
  },
  featureTitle: {
    fontSize: 17,
    fontFamily: fontFamily.bold,
    lineHeight: 15,
    color: '#09182B',
    marginTop: 10,
    marginBottom: 15,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bullet: {
    backgroundColor: '#007AFF',
    borderRadius: 20,
    width: 7,
    height: 7,
    marginRight: 15,
  },
  itemText: {
    fontFamily: fontFamily.medium,
    fontSize: 14,
    lineHeight: 16,
    color: '#09182B',
  },
});