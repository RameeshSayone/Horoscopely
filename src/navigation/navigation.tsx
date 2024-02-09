import React, { useEffect, useState } from 'react';
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
import Notification from '../screens/Notification';
import Settings from '../screens/Settings';
import SelectDateScreen from '../screens/SelectDateScreen';
import SelectTimeScreen from '../screens/SelectTimeScreen';
import FocusOfTheDay from '../screens/FocusOfTheDay';
import CalendarAdvice from '../screens/CalendarAdvice';
import ManageInterest from '../screens/ManageInterest';
import ViewReports from '../screens/ViewReports';
import ViewReportsDetails from '../screens/ViewReportsDetails';
import SelectDateRange from '../screens/SelectDateRange';
import Faq from '../screens/Faq';
import ViewsPackages from '../screens/ViewsPackages';
import ManagePayment from '../screens/ManagePayment';
import IosVerification from '../screens/IosVerification';
import ErrorPage from '../screens/ErrorPage';
import OfflinePage from '../screens/OfflinePage';
import VersionDetails from '../screens/VersionDetails';
import Profile from '../screens/Profile';
import CompatibilityDetailScreen from '../screens/CompatibilityDetailScreen';
import screenName from '../constant/screenName';
import { RootStackParamList } from '../interfaces/common';
import { getItem } from '../utils/localStorage';
import { TOKEN } from '../constant/types';

const Stack = createStackNavigator<RootStackParamList>();

const Navigation: React.FC = () => {
  const [token,setToken]= useState<string|null>(null);
  const [isLoading,setIsLoading]= useState<boolean>(true)
  useEffect(()=>{
    getToken()
  },[])
  const getToken=async()=>{
    const token= await getItem(TOKEN)
    setToken(token);
    setIsLoading(false);
    console.log("🚀 ~ token:", token)

  }

 
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
        { isLoading==true?
        <Stack.Screen name={screenName.LOADER_SCREEN} component={LoaderScreen} />
        :token!==null?
        <>
        <Stack.Screen name={screenName.DASHBOARD} component={Dashboard} />
       
        <Stack.Screen name={screenName.REGISTER_FORM} component={RegisterForm} />
        <Stack.Screen name={screenName.LOADER_SCREEN} component={LoaderScreen} />
        <Stack.Screen name={screenName.OTP_VERIFICATION} component={OtpVerification} />
        <Stack.Screen name={screenName.NOTIFICATION} component={Notification} />
        <Stack.Screen name={screenName.SETTINGS} component={Settings}/>
        <Stack.Screen name={screenName.SELECT_DATE_SCREEN} component={SelectDateScreen} />
        <Stack.Screen name={screenName.SELECT_TIME_SCREEN} component={SelectTimeScreen} />
        <Stack.Screen name={screenName.FOCUS_OF_THE_DAY} component={FocusOfTheDay} />
        <Stack.Screen name={screenName.CALENDAR_ADVICE} component={CalendarAdvice} />
        <Stack.Screen name={screenName.MANAGE_INTEREST} component={ManageInterest} />
        <Stack.Screen name={screenName.VIEW_REPORTS} component={ViewReports} />
        <Stack.Screen name={screenName.VIEW_REPORTS_DETAILS} component={ViewReportsDetails} />
        <Stack.Screen name={screenName.SELECT_DATE_RANGE} component={SelectDateRange} />
        <Stack.Screen name={screenName.FAQ} component={Faq} />
        <Stack.Screen name={screenName.VIEW_PACKAGES} component={ViewsPackages} />
        <Stack.Screen name={screenName.MANAGE_PAYMENT} component={ManagePayment} />
        <Stack.Screen name={screenName.IOS_VERIFICATION} component={IosVerification} />
        <Stack.Screen name={screenName.ERROR_404} component={ErrorPage} />
        <Stack.Screen name={screenName.OFFLINE_PAGE} component={OfflinePage} />
        <Stack.Screen name={screenName.VERSION_DETAILS} component={VersionDetails} />
        <Stack.Screen name={screenName.PROFILE} component={Profile} />
        <Stack.Screen name={screenName.COMPATIBILITY_DETAIL_SCREEN} component={CompatibilityDetailScreen} />
        </>:
        <>
         <Stack.Screen name={screenName.WELCOME} component={WelcomeScreen} />
        <Stack.Screen name={screenName.TERMS_AND_CONDITION} component={TermsAndConditionScreen} />
        <Stack.Screen name={screenName.PRIVACY_POLICY} component={PrivacyPolicyScreen} />
        <Stack.Screen name={screenName.SIGN_UP_WITH_PHONE} component={SignUpWithPhone} />
        <Stack.Screen name={screenName.SIGN_UP_WITH_EMAIL} component={SignUpWithEmail} />
        </>}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
