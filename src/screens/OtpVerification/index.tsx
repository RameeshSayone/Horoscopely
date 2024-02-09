import React, { useState } from 'react';
import { View, ScrollView, Image, Text, TouchableOpacity } from 'react-native';
import { ImagePaths } from '../../constant/images';
import GradientButton from '../../components/GradientButton';
import { useNavigation, useRoute } from '@react-navigation/native';
import { RootStackParamList, RouteStackParamList } from '../../interfaces/common';
import OTPInput from '../../components/OtpInput';
import CustomPopup from '../../components/CustomPopup';
import styles from './styles';
import screenName from '../../constant/screenName';
import auth, {  FirebaseAuthTypes } from '@react-native-firebase/auth';
import { showToast } from '../../utils/toast';
import { ERROR, TOKEN } from '../../constant/types';
import { screenSize } from '../../constant/screenSize';
import { fontFamily } from '../../constant/fontFamily';
import Toast from 'react-native-root-toast';
import { setItem } from '../../utils/localStorage';


const OtpVerification: React.FC = () => {
  const navigation = useNavigation<RootStackParamList>();
  const route = useRoute<RouteStackParamList>();
  const {params} = route;
  const [isEmailPopup, setIsEmailPopup] = useState<boolean>(false);
  const [confirmation, setConfirmation] = useState< FirebaseAuthTypes.ConfirmationResult | null>(params?.confirmationResult);
  const [isMobilePopup, setIsMobilePopup] = useState<boolean>(false);
  const [isEmailVerified, setIsEmailVerified] = useState<boolean>(false);
  const [isMobileVeification, setIsMobileVeification] = useState<boolean>(params?.isMobileVeification);
  const [isMobileVerified, setIsMobileVerified] = useState<boolean>(false);
  const [reciever, setIsReciever] = useState<string>(params?.provider);
  const [otpErrorMessage, setOtpErrorMessage] = useState<string | null>('');
  const [verificationCode, setVerificationCode] = useState('');
  const onPressContinue = (): void => {
    if (isEmailVerified === false) {
      setIsEmailVerified(true);
      setIsEmailPopup(true);
    } else {
      setIsMobileVerified(true);
      setIsMobilePopup(true);
    }
  };
  const resendOtp=async()=>{
    const confirmationResult = await auth().signInWithPhoneNumber(`+91${reciever}`);
    setConfirmation(confirmationResult);
  }
  const confirmCode = async () => {
    try {
      if (confirmation) {
       const authResponse= await confirmation.confirm(verificationCode);
       const authToken = await authResponse?.user?.getIdToken();
       setItem(TOKEN,authToken)
       setIsMobilePopup(true)
      }
    } catch (error) {
      showToast(ERROR,'Invalid code')
    }
  };

  const onChangeOtp = (otp: string): void => {
    setVerificationCode(otp)
  };

  const onCloseEmailPopup = (): void => {
    setIsEmailPopup(false);
    setIsReciever('+000-9876543210');
  };

  const onCloseMobilePopup = (): void => {
    setIsMobilePopup(false);
    navigation.navigate(screenName.LOADER_SCREEN)
  };
  const checkDisable=()=>{
    if (verificationCode?.length===6){
         return false
    }else{
      return true
    }
  }

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
          <TouchableOpacity 
          style={styles.editContainer}
          onPress={()=>navigation.goBack()}
          >
            <Image source={ImagePaths.edit} style={styles.editIcon} />
            <Text style={styles.headerText}>Edit</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.title}>Enter the 4 digit OTP received</Text>
        <TouchableOpacity onPress={resendOtp}>
         <Text style={styles.label}>RESEND OTP</Text>
        </TouchableOpacity>
        <OTPInput
         value={verificationCode}
         onOTPChange={onChangeOtp} />
        <GradientButton
         checkDisable={checkDisable}
         onPress={confirmCode}
         containerStyle={[styles.buttonContainer,{opacity:checkDisable()==true?0.5:1}]}
         buttonName={'Verify'} />
        <TouchableOpacity 
        onPress={() => navigation.goBack()} 
        style={[styles.backButton]}>
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
