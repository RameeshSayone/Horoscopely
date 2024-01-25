import { StyleSheet } from 'react-native';
import { fontFamily } from '../../constant/fontFamily';
import { screenSize } from '../../constant/screenSize';

export const styles = StyleSheet.create({
  mainContainer:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },
  container: {
    height: 6,
    backgroundColor: '#08407E',
    borderRadius: 9,
    flexDirection: 'row',
    width: screenSize.width * 0.4,
    alignItems: 'center',
    marginRight: 20,
  },
  progressBar: {
    height: '100%',
    borderRadius: 9,
  },
  progressText: {
    color: '#FFFFFF',
    fontFamily: fontFamily.medium,
    fontSize: 16,
    lineHeight: 19,
  },
});