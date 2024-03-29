import { StyleSheet } from 'react-native';
import { fontFamily } from '../../constant/fontFamily';

export const styles = StyleSheet.create({
  container: {
    marginBottom:15
  },
  dropdownButton: {
    borderWidth:0.5,
    borderColor:'#AFAFAF',
    borderRadius:3,
    backgroundColor:'#FFFFFF',
    paddingHorizontal:10,
    justifyContent:'center',
    height:33
  },
  labelText:{
    fontFamily: fontFamily.regular,
    fontSize: 15,
    color: '#545353',
  },
  downArrow:{
    width: 15,
    height: 9,
    tintColor: '#545353',
    position:'absolute',
    right:10
  },
  headerText:{
    fontFamily:fontFamily.bold,
    fontSize:12,
    lineHeight:14,
    color:'#545353',
    marginBottom:10
  },
});
