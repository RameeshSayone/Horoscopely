import { StyleSheet } from 'react-native';
import { fontFamily } from '../../constant/fontFamily';
import { screenSize } from '../../constant/screenSize';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
  headerContainer: {
    paddingHorizontal: 25,
    paddingVertical: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 60,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderTopColor: '#00000030',
    borderBottomColor: '#00000030',
    backgroundColor: '#FFFFFF60',
  },
  backButton: {
    position: 'absolute',
    left: 30,
  },
  headerText: {
    fontFamily: fontFamily.bold,
    fontSize: 15,
    lineHeight: 18,
    color: '#09182B',
  },
  cardContainer: {
    alignItems: 'center',
    marginRight: 10,
  },
  cardButton: {
    width: (screenSize.width - 80) * 0.5,
  },
  cardGradient: {
    padding: 5,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
  },
  cardImage: {
    width: 100,
    height: 100,
  },
  cardText: {
    fontFamily: fontFamily.semiBold,
    fontSize: 15,
    lineHeight: 18,
    color: '#09182B',
    marginVertical: 10,
  },
  footerContainer: {
    paddingHorizontal: 30,
    paddingVertical: 30,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderTopColor: '#00000030',
    borderBottomColor: '#00000030',
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
  },
  resetButton: {
    fontFamily: fontFamily.semiBold,
    fontSize: 15,
    lineHeight: 18,
    color: '#7B7B7B',
  },
  listContainer: {
    paddingHorizontal:30,
    marginVertical:20
  }   
});