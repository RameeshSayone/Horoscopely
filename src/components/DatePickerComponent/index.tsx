import React from 'react';
import { View } from 'react-native';
import DatePicker from 'react-native-date-picker';
import { styles } from './styles';

const MyDatePicker = (props:any) => {
  return (
    <View style={styles.container}>
      <DatePicker
        style={styles.datePicker}
        maximumDate={new Date()}
        date={props?.selectedDate}
        onDateChange={props?.handleDateChange}
        mode={props?.mode}
        androidVariant="nativeAndroid"
        textColor="#328AEE"
      />
    </View>
  );
};

export default MyDatePicker;
