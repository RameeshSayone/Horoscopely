import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../screens/WelcomeScreen'; 
import TermsAndConditionScreen from '../screens/TermsAndConditionScreen';
import PrivacyPolicyScreen from '../screens/PrivacyPolicyScreen';
import SignUpWithPhone from '../screens/SignUpWithPhone';
import SignUpWithEmail from '../screens/SignUpWithEmail';
import RegisterForm from '../screens/RegisterForm';
import OtpVerification from '../screens/OtpVerification';
import LoaderScreen from '../screens/LoaderScreen';
import Dashboard from '../screens/Dashboard';
import screenName from '../constant/screenName';
import { RootStackParamList } from '../interfaces/common';

const Stack = createStackNavigator<RootStackParamList>();

const Navigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen name={screenName.DASHBOARD} component={Dashboard} />
        <Stack.Screen name={screenName.WELCOME} component={WelcomeScreen} />
        <Stack.Screen name={screenName.TERMS_AND_CONDITION} component={TermsAndConditionScreen} />
        <Stack.Screen name={screenName.PRIVACY_POLICY} component={PrivacyPolicyScreen} />
        <Stack.Screen name={screenName.SIGN_UP_WITH_PHONE} component={SignUpWithPhone} />
        <Stack.Screen name={screenName.SIGN_UP_WITH_EMAIL} component={SignUpWithEmail} />
        <Stack.Screen name={screenName.REGISTER_FORM} component={RegisterForm} />
        <Stack.Screen name={screenName.LOADER_SCREEN} component={LoaderScreen} />
        <Stack.Screen name={screenName.OTP_VERIFICATION} component={OtpVerification} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
