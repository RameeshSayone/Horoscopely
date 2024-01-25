import { StyleSheet } from 'react-native';
import { fontFamily } from '../../constant/fontFamily';
import { screenSize } from '../../constant/screenSize';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#eee',
    padding: 8,
    marginHorizontal: 25,
    borderRadius: 3,
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabText: {
    fontFamily: fontFamily.medium,
    fontSize: 14,
    lineHeight: 16,
    color: '#FFFFFF',
  },
  activeTab: {

  },
  activeTabText: {
    fontFamily: fontFamily.bold,
  },
  activeLine: {
    width: (screenSize.width - 66) / 3,
    height: 4,
    backgroundColor: '#FFFFFF',
    position: 'absolute',
    borderRadius: 100,
    bottom: -10,
  },
  activelineContainer: {
    marginHorizontal: 25
  },
  traitsText: {
    fontFamily: fontFamily.regular,
    fontSize: 13,
    lineHeight: 20,
    color: '#FFFFFF',
  },
  boldText: {
    fontFamily: fontFamily.bold,
    fontSize: 14,
    lineHeight: 16,
    color: '#FFFFFF',
    marginVertical: 15,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  tabSec:{
    flex: 1,
    marginVertical: 10
  }
});
