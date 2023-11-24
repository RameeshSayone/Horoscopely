import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import DatePicker from 'react-native-date-picker';
import { screenSize } from '../../constant/screenSize';

const MyDatePicker = (props: any) => {

  return (
    <View style={styles.container}>
      <DatePicker
      style={{
        backgroundColor:'#F7F6F8',
        width:screenSize.width-60,
       
      }}
      maximumDate={new Date()}
        date={props?.selectedDate}
        onDateChange={props?.handleDateChange}
        mode={props?.mode}
        androidVariant = 'nativeAndroid'
        textColor={'#328AEE'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    marginBottom: 10,
  },
});

export default MyDatePicker;
