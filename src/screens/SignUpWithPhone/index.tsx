import React, { useState } from 'react';
import {
  View,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import { ImagePaths } from '../../constant/images';
import TextBox from '../../components/TextBox';
import CustomDropdown from '../../components/CustomDropdown';
import GradientButton from '../../components/GradientButton';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../interfaces/common';
import { styles } from './styles';
import screenName from '../../constant/screenName';
import auth, {  FirebaseAuthTypes } from '@react-native-firebase/auth';
import { validatePhoneNumber } from '../../utils/validators';


const MobileSignupScreen: React.FC = () => {
  const navigation = useNavigation<RootStackParamList>();
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [mobileErrorMessage, setMobileErrorMessage] = useState< string | null>('');
  
  
  const [confirmation, setConfirmation] = useState< FirebaseAuthTypes.ConfirmationResult | null>(null);

  const signInWithPhoneNumber = async () => {
    try {
      const confirmationResult = await auth().signInWithPhoneNumber(`+91${phoneNumber}`);
      
      navigation.navigate(screenName.OTP_VERIFICATION,{
        confirmationResult:confirmationResult,
        provider:phoneNumber,
        isMobileVeification:true
      })
    } catch (error) {
    }
  };



  const handleInputChange = (text: string) => {
    setPhoneNumber(text);
    if(text==''){
      setMobileErrorMessage("Phone number is required")
    }
    else if(validatePhoneNumber(text)){
      setMobileErrorMessage(null)
    }else{
      setMobileErrorMessage("Invalid Phone number")
    }
  };
  const checkDisable=()=>{
    if (mobileErrorMessage===null){
         return false
    }else{
      return true
    }
  }
  

  const onPressSignup = (): void => {
    navigation.navigate(screenName.REGISTER_FORM)
  };

  const options = ['+91'];

  const handleSelectOption = (selectedOption: string) => {
  };

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Image source={ImagePaths.hsLayout} style={styles.backgroundImage} />
      </View>

      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        style={styles.middleSection}
        nestedScrollEnabled={true}
      >
        <View style={styles.middleContent}>
          <Image source={ImagePaths.logo} style={styles.logoImage} />
          <Text style={styles.mobileNumberText}>Mobile Number</Text>
          <View style={styles.inputContainer}>
            <CustomDropdown options={options} onSelectOption={handleSelectOption} />
            <View style={styles.textBoxContainer}>
              <TextBox
                placeholder="Enter your mobile number"
                onChange={handleInputChange}
                isEditable={true}
                value={phoneNumber}
              />
            </View>
          </View>
          <View>
                <Text>{mobileErrorMessage}</Text>
          </View>

          <View style={styles.buttonWrapper}>
            <GradientButton 
             checkDisable={checkDisable}
             buttonName={"Sign Up"}
             onPress={signInWithPhoneNumber} 
             containerStyle={[styles.buttonContainer,{opacity:checkDisable()?0.5:1}]} />
          </View>

          <TouchableOpacity
           
            onPress={() => navigation.goBack()}
            style={styles.backButton}>
            <Text style={styles.backButtonText}>Back To Signup Options</Text>
          </TouchableOpacity>
        </View>

        <Image source={ImagePaths.hsBottomLayout} style={styles.backgroundBottomImage} />
      </ScrollView>
    </View>
  );
};


export default MobileSignupScreen;

