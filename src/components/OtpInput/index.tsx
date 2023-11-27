import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input';

interface OTPInputProps {
  onOTPChange: (otp: string) => void;
}

const OTPInput: React.FC<OTPInputProps> = ({ onOTPChange }) => {
  const [otp, setOTP] = useState('');

  const handleOTPEnter = (enteredOTP: string) => {
    setOTP(enteredOTP);
  };

  return (
    <View style={styles.container}>
      <OTPInputView
        pinCount={4}
        code={otp}
        onCodeChanged={handleOTPEnter}
        autoFocusOnLoad
        codeInputFieldStyle={styles.underlineStyleBase}
        codeInputHighlightStyle={styles.underlineStyleHighLighted}
        onCodeFilled={(code) => onOTPChange(code)}
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
    width: 55,
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
