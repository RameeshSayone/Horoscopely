import React from 'react';
import { 
  View, 
  Text, 
  Image, 
  StyleSheet, 
  Platform, 
  TouchableOpacity, 
  ScrollView 
} from 'react-native';
import { ImagePaths } from '../constant/images';
import { fontFamily } from '../constant/fontFamily';
import RoundedButton from '../components/RoundedButton';
import { useNavigation } from '@react-navigation/native';
import screenName from '../constant/screenName';
import { RootStackParamList } from '../interfaces/common';

const WelcomeScreen: React.FC = () => {
  const navigation = useNavigation<RootStackParamList>();
  const onClickTermsAndCondition = (): void => {
    navigation.navigate(screenName.TERMS_AND_CONDITION);
  };
  const onClickPrivacyPolicy = (): void => {
    navigation.navigate(screenName.PRIVACY_POLICY);
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
            onPress={()=>{}}
            buttonName='Mobile Number'
            imageUrl={ImagePaths.smartphone}
            labelStyle={styles.buttonText}
            iconStyle={styles.smartPhoneIcon}
            containerStyle={styles.mobileContainer}
           />
            <RoundedButton
            onPress={()=>{}}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F6F8',
  },
  backgroundImage: {
    width: 314,
    height: 175,
    resizeMode: 'stretch',
    alignSelf: 'flex-end',
  },
  logoImage: {
    width: 160,
    height: 52,
    position: 'absolute',
    top: 94,
    left: 28,
  },
  contentContainer: {
    marginHorizontal: 30,
  },
  title: {
    fontFamily: fontFamily.bold,
    fontSize: 28,
    color: '#292929',
  },
  subtitle: {
    fontFamily: fontFamily.light,
    fontSize: 28,
    color: '#292929',
  },
  subtitleText: {
    fontFamily: fontFamily.regular,
    fontSize: 15,
    color: '#292929',
    marginVertical: 9,
  },
   buttonText: {
    fontSize: 17,
    color: '#FFFFFF', 
    fontFamily:fontFamily.regular
  },
  googleLabel:{
    fontSize: 17,
    color: '#807E7E', 
    fontFamily:fontFamily.robotoMedium
  },
  facebookLabel:{
    fontSize: 17,
    color: '#FFFFFF', 
    fontFamily:fontFamily.robotoMedium
  },
  appleLabel:{
    fontSize: 17,
    color: '#000000', 
    fontFamily:fontFamily.medium
  },
  emailIcon:{
    width:17,
    height:13,
    position:'absolute',
    top:20,
    left:48,
  },
  smartPhoneIcon:{
    width:13,
    height:20,
    position:'absolute',
    top:17,
    left:48,
  },
  ggogleIcon:{
    width:19,
    height:19,
    position:'absolute',
    top:17,
    left:48,
  },
  facebookIcon:{
    width:18,
    height:18,
    position:'absolute',
    top:17,
    left:48,
  },
  appleIcon:{
    width:16,
    height:18,
    position:'absolute',
    top:17,
    left:48,
  },
  mobileContainer:{
    backgroundColor:'#B342F2'
  },
  emailContainer:{
    backgroundColor:'#328AEE'
  },
  googleContainer:{
    backgroundColor:'#FFFFFF',
    shadowColor: "#00000080",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  facebookContainer:{
    backgroundColor:'#4267B2'
  },
  appleContainer:{
    backgroundColor:'#FFFFFF',
    shadowColor: "#00000080",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },


  skipButton: {
    marginVertical: 10,
  },
  skipButtonText: {
    fontFamily: fontFamily.medium,
    fontSize: 14,
    color: '#7D7D7D',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  agreementText: {
    fontFamily: fontFamily.medium,
    fontSize: 14,
    color: '#000000',
    textAlign: 'center',
  },
  termsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  termsLink: {
    fontFamily: fontFamily.regular,
    fontSize: 13,
    color: '#328AEE',
    textDecorationLine: 'underline',
  },
  andText: {
    fontFamily: fontFamily.regular,
    fontSize: 13,
    color: '#09182B',
    marginHorizontal: 5,
  },
  privacyTextContainer: {
    marginVertical: 15,
  },
  privacyText: {
    fontFamily: fontFamily.regular,
    fontSize: 11,
    color: '#000000',
    textAlign: 'center',
  },
  bottomImage: {
    width: 171,
    height: 51,
    resizeMode: 'stretch',
    alignSelf: 'center',
  },
});


