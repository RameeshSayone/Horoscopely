
import { Platform, StyleSheet } from 'react-native';
import { fontFamily } from '../../constant/fontFamily';

export const styles = StyleSheet.create({
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
  backgroundImage: {
    height: '100%',
    padding: 25,
  },
  flatList: {
    marginTop: 10,
    marginBottom: Platform.OS == 'ios' ? 150 : 100,
  },
  cardContainer: {
    backgroundColor: '#F2F2F2',
    padding: 25,
    borderRadius: 7,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  questionText: {
    fontFamily: fontFamily.semiBold,
    fontSize: 14,
    lineHeight: 21,
    color: '#09182B',
  },
  showAnswerText: {
    fontFamily: fontFamily.regular,
    fontSize: 30,
    lineHeight: 40,
    color: '#007AFF',
  },
  answerContainer: {
    marginTop: 15,
  },
  answerText: {
    fontFamily: fontFamily.regular,
    fontSize: 12,
    lineHeight: 19,
    color: '#545353',
  },
  separator: {
    width: 10,
    height: 10,
  },
});
