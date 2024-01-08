import { StyleSheet } from 'react-native';
import { fontFamily } from '../../constant/fontFamily';
import { screenSize } from '../../constant/screenSize';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  dateRangeContainer:{
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F7F6F8',
    width:screenSize.width-60,
    margin:30,
    borderRadius:16,
    paddingVertical:30,
    height:"100%",
    flex:1
  },
  dateLabel:{
    textAlign:'left',
    width:'100%',
    fontFamily:fontFamily.bold,
    fontSize:13,
    lineHeight:15,
    color:'#292929',
    position:'absolute',
    top:10,
    left:15,
    zIndex:1
   },
   datePickerStyle:{
    backgroundColor: '#F7F6F8',
    width: screenSize.width - 80,
  }
});