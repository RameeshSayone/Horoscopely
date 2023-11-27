import React from 'react';
import { 
  View, 
  Text, 
  Image, 
  Platform, 
  TouchableOpacity, 
  ScrollView 
} from 'react-native';
import { ImagePaths } from '../../constant/images';
import RoundedButton from '../../components/RoundedButton';
import { useNavigation } from '@react-navigation/native';
import screenName from '../../constant/screenName';
import { RootStackParamList } from '../../interfaces/common';
import { styles } from './styles';

const WelcomeScreen: React.FC = () => {
  const navigation = useNavigation<RootStackParamList>();
  const onClickTermsAndCondition = (): void => {
    navigation.navigate(screenName.TERMS_AND_CONDITION);
  };
  const onClickPrivacyPolicy = (): void => {
    navigation.navigate(screenName.PRIVACY_POLICY);
  };
  const onClickMobileNumber = (): void => {
    navigation.navigate(screenName.SIGN_UP_WITH_PHONE);
  };
  const onClickEmail = (): void => {
    navigation.navigate(screenName.SIGN_UP_WITH_EMAIL);
  };
  return (
    <ScrollView
      bounces={false}
      showsVerticalScrollIndicator={false}
      style={styles.container}
    >
      <Image
        source={ImagePaths.signupLayout}
        style={styles.backgroundImage}
      />
      <Image
        source={ImagePaths.logo}
        style={styles.logoImage}
      />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>
          W<Text style={styles.subtitle}>elcome</Text>
        </Text>
        <Text style={styles.subtitleText}>
          Choose one of the below to get started
        </Text>
        <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        >
           <RoundedButton
            onPress={()=>{onClickMobileNumber()}}
            buttonName='Mobile Number'
            imageUrl={ImagePaths.smartphone}
            labelStyle={styles.buttonText}
            iconStyle={styles.smartPhoneIcon}
            containerStyle={styles.mobileContainer}
           />
            <RoundedButton
            onPress={()=>{onClickEmail()}}
            buttonName='Email Address'
            imageUrl={ImagePaths.email}
            containerStyle={styles.emailContainer}
            labelStyle={styles.buttonText}
            iconStyle={styles.emailIcon}/>
            <RoundedButton
            onPress={()=>{}}
            buttonName='Sign in with Google'
            imageUrl={ImagePaths.google}
            containerStyle={styles.googleContainer}
            labelStyle={styles.googleLabel}
            iconStyle={styles.ggogleIcon}/>
            <RoundedButton
            onPress={()=>{}}
            buttonName='Sign in with Facebook'
            imageUrl={ImagePaths.facebook}
            labelStyle={styles.facebookLabel}
            iconStyle={styles.facebookIcon}
            containerStyle={styles.facebookContainer}/>
            {(Platform.OS=='ios')&&
            <RoundedButton
            onPress={()=>{}}
            buttonName='Sign in with Apple'
            imageUrl={ImagePaths.apple}
            labelStyle={styles.appleLabel}
            iconStyle={styles.appleIcon}
            containerStyle={styles.appleContainer}/>}
        </ScrollView>
        <TouchableOpacity style={styles.skipButton}>
          <Text style={styles.skipButtonText}>Skip</Text>
        </TouchableOpacity>
        <Text style={styles.agreementText}>
          By continuing you agree to the
        </Text>
        <View style={styles.termsContainer}>
          <TouchableOpacity
          onPress={()=>{onClickTermsAndCondition()}}>
            <Text style={styles.termsLink}>Terms & Conditions</Text>
          </TouchableOpacity>
          <Text style={styles.andText}>&</Text>
          <TouchableOpacity
          onPress={()=>{onClickPrivacyPolicy()}}>
            <Text style={styles.termsLink}>Privacy Policy</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.privacyTextContainer}>
          <Text style={styles.privacyText}>
            Your privacy is respected and protected. All personal information is used for astrological calculations only.
          </Text>
        </View>
      </View>
      <Image
        source={ImagePaths.bottomLayout}
        style={styles.bottomImage}
      />
    </ScrollView>
  );
};

export default WelcomeScreen;

