import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input';

interface OTPInputProps {
  onOTPChange: (otp: string) => void;
  value:string
}

const OTPInput: React.FC<OTPInputProps> = ({ onOTPChange,value }) => {

  return (
    <View style={styles.container}>
      <OTPInputView
        pinCount={6}
        code={value}
        onCodeChanged={onOTPChange}
        autoFocusOnLoad
        codeInputFieldStyle={styles.underlineStyleBase}
        codeInputHighlightStyle={styles.underlineStyleHighLighted}
        onCodeFilled={(code) => {}}
        keyboardType='number-pad'
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft:30,
    marginBottom:40,
    marginTop:10
  },
  title: {
    fontSize: 18,
    marginBottom: 16,
  },
  underlineStyleBase: {
    width: 40,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 2,
    color: 'black',
    fontSize: 16,
    borderColor: '#328AEE',
  },
  underlineStyleHighLighted: {
  },
});

export default OTPInput;
