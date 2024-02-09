import { FirebaseAuthTypes } from "@react-native-firebase/auth";

export type RootStackParamList = {
    setOptions: any;
    addListener: any;
    navigation: any;
    navigate: any;
    goBack: any;
    WELCOME: undefined;
    TERMS_AND_CONDITION:undefined;
    PRIVACY_POLICY:undefined;
    SIGN_UP_WITH_PHONE:undefined;
    SIGN_UP_WITH_EMAIL:undefined;
    REGISTER_FORM:undefined;
    OTP_VERIFICATION:{
      confirmationResult:FirebaseAuthTypes.ConfirmationResult,
      provider:string,
      isMobileVeification:boolean
    };
    LOADER_SCREEN:undefined;
    DASHBOARD:undefined;
    NOTIFICATION:undefined;
    SETTINGS:undefined;
    SELECT_DATE_SCREEN:undefined;
    SELECT_TIME_SCREEN:undefined;
    FOCUS_OF_THE_DAY:undefined;
    CALENDAR_ADVICE:undefined;
    MANAGE_INTEREST:undefined;
    VIEW_REPORTS:undefined;
    VIEW_REPORTS_DETAILS:undefined;
    SELECT_DATE_RANGE:undefined;
    FAQ:undefined;
    VIEW_PACKAGES:undefined;
    MANAGE_PAYMENT:undefined;
    IOS_VERIFICATION:undefined;
    ERROR_404:undefined;
    OFFLINE_PAGE:undefined;
    VERSION_DETAILS:undefined;
    PROFILE:undefined;
    COMPATIBILITY_DETAIL_SCREEN:undefined;
  };
  export type RouteStackParamList={
    params:{
        confirmationResult:FirebaseAuthTypes.ConfirmationResult,
        provider:string,
        isMobileVeification:boolean
      };
    key:string,
    name:string,
    path:string
  }

