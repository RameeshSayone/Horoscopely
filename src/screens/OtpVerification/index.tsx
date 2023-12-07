import React, { useState } from 'react';
import { View, ScrollView, Image, Text, TouchableOpacity } from 'react-native';
import { ImagePaths } from '../../constant/images';
import GradientButton from '../../components/GradientButton';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../interfaces/common';
import OTPInput from '../../components/OtpInput';
import CustomPopup from '../../components/CustomPopup';
import styles from './styles';
import screenName from '../../constant/screenName';


const OtpVerification: React.FC = () => {
  const navigation = useNavigation<RootStackParamList>();
  const [isEmailPopup, setIsEmailPopup] = useState<boolean>(false);
  const [isMobilePopup, setIsMobilePopup] = useState<boolean>(false);
  const [isEmailVerified, setIsEmailVerified] = useState<boolean>(false);
  const [isMobileVerified, setIsMobileVerified] = useState<boolean>(false);
  const [reciever, setIsReciever] = useState<string>('sample@gmail.com');

  const onPressContinue = (): void => {
    if (isEmailVerified === false) {
      setIsEmailVerified(true);
      setIsEmailPopup(true);
    } else {
      setIsMobileVerified(true);
      setIsMobilePopup(true);
    }
  };

  const onChangeOtp = (otp: string): void => {
    // Handle OTP change if needed
  };

  const onCloseEmailPopup = (): void => {
    setIsEmailPopup(false);
    setIsReciever('+000-9876543210');
  };

  const onCloseMobilePopup = (): void => {
    setIsMobilePopup(false);
    navigation.navigate(screenName.LOADER_SCREEN)
  };

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Image source={ImagePaths.registerFormTopLayout} style={styles.backgroundImage} />
      </View>

      <ScrollView style={styles.middleSection} contentContainerStyle={styles.middleSectionContent}>
        <View style={styles.otpSentContainer}>
          <View style={styles.otpSentTextContainer}>
            <Text style={styles.headerText}>OTP sent to</Text>
            <Text style={styles.subText}>{reciever}</Text>
          </View>
          <TouchableOpacity style={styles.editContainer}>
            <Image source={ImagePaths.edit} style={styles.editIcon} />
            <Text style={styles.headerText}>Edit</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.title}>Enter the 4 digit OTP received</Text>
        <Text style={styles.label}>RESEND OTP</Text>
        <OTPInput onOTPChange={onChangeOtp} />
        <GradientButton onPress={onPressContinue} containerStyle={styles.buttonContainer} buttonName={'Verify'} />
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.backButtonText}>Back To Signup Options</Text>
        </TouchableOpacity>
      </ScrollView>

      <CustomPopup
        message={'Your Email Address has been verified'}
        title={'Email Address Verified'}
        isVisible={isEmailPopup}
        onCancel={() => {
          onCloseEmailPopup();
        }}
      />
      <CustomPopup
        title={'Mobile Number Verified'}
        message={'Your mobile number has been verified'}
        isVisible={isMobilePopup}
        onCancel={() => {
          onCloseMobilePopup();
        }}
      />
    </View>
  );
};

export default OtpVerification;
