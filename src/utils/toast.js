import Toast from 'react-native-root-toast';
import { screenSize } from '../constant/screenSize';
import { ERROR, NORMAL, SUCCESS, WARNING } from '../constant/types';
export function showToast(type, message) {
  Toast.show(message, {
    duration: 3000,
    shadow: false,
    animation: false,
    hideOnPress: true,
    delay: 0,
    opacity: type == NORMAL ? 0.8 : 1,
    containerStyle: {
      padding: 10,
      width: screenSize.width - 50,
      minHeight: 50,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
      backgroundColor: getToastColor(type),
    },
    textStyle: {
      fontSize: 15,
      color: 'white',
      fontFamily: 'Geomanist-Regular',
    },
  });
}
export function getErrorMessage(error) {
  const errorMessage =
    (error?.response && error?.response?.data?.message) ||
    error?.message ||
    'Something went wrong';
  return errorMessage;
}
const getToastColor = (type) => {
  let color = '';
  switch (type) {
    case ERROR:
      color = '#d9534f';
      break;
    case NORMAL:
      color = '#000000';
      break;
    case WARNING:
      color = 'rgb(253, 183, 1)';
      break;
    case SUCCESS:
      color = '#5cb85c';
      break;
    default:
      color = '#000000';
  }
  return color;
};