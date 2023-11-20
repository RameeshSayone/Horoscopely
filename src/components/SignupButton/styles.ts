import { StyleSheet } from 'react-native';
import { fontFamily } from '../../constant/fontFamily';

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 30,
    marginVertical: 15,
    zIndex: 0,
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonGradient: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelStyle: {
    fontFamily: fontFamily.semiBold,
    fontSize: 17,
    color: '#FFFFFF',
  },
});

export default styles;
