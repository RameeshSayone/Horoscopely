import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../screens/WelcomeScreen'; 
import TermsAndConditionScreen from '../screens/TermsAndConditionScreen';
import PrivacyPolicyScreen from '../screens/PrivacyPolicyScreen';
import MobileSignupScreen from '../screens/MobileSignupScreen';
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
        <Stack.Screen name={screenName.WELCOME} component={WelcomeScreen} />
        <Stack.Screen name={screenName.TERMS_AND_CONDITION} component={TermsAndConditionScreen} />
        <Stack.Screen name={screenName.PRIVACY_POLICY} component={PrivacyPolicyScreen} />
        <Stack.Screen name={screenName.MOBILE_NUMBER_SIGNUP} component={MobileSignupScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
