
import { StyleSheet } from 'react-native';
import { fontFamily } from '../../constant/fontFamily';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F7F6F8',
    flex: 1,
  },
  statusBar: {
    translucent: false,
    backgroundColor: 'grey',
  },
  imageContainer: {
    margin: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iosImage: {
    width: '100%',
    height: 161,
    resizeMode: 'contain',
  },
  scrollView: {
    bounces: false,
    showsVerticalScrollIndicator: false,
    paddingHorizontal: 25,
  },
  sectionContainer: {
    marginBottom: 10,
  },
  sectionTitle: {
    fontFamily: fontFamily.semiBold,
    fontSize: 17,
    lineHeight: 20,
    color: '#060606',
  },
  sectionText: {
    fontFamily: fontFamily.regular,
    fontSize: 13,
    lineHeight: 21,
    color: '#434343',
    marginVertical: 5,
  },
  buttonContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1,
  },
  buttonText: {
    fontFamily: fontFamily.semiBold,
    fontSize: 18,
    lineHeight: 21,
    color: '#328AEE',
  },
});
