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
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../interfaces/common';
import { styles } from './styles';
import screenName from '../../constant/screenName';
import GradientButton from '../../components/GradientButton';
import { firebase } from '../../../firebaseConfig';


const EmailSignupScreen: React.FC = () => {
  const navigation = useNavigation<RootStackParamList>();
  const [email, setIEmail] = useState<string>('sayone@yopmail.com');

  const handleInputChange = (text: string) => {
    setIEmail(text);
  };
  const signUpWithEmail = async (email:string) => {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, '123456').then(()=>{
        firebase.auth().currentUser?.sendEmailVerification({
          handleCodeInApp: true,
          url: 'https://horoscopely-5e04f.firebaseapp.com',
          }).then(()=>{
            alert('Verification mail sent successfully')
          }).catch(()=>{

          }).then( ()=>{
            firebase.firestore().collection('users')
            .doc (firebase.auth().currentUser?.uid)
            .set({
              firstName:'Sayone',
              lastName:'sayone',
              email,
            })
            console.log('data stored  successfully!');
          }).catch((error)=>{
            console.error('Error data stored:', error?.message);
          })
      })
      console.log('User signed up successfully!');
    } catch (error:any) {
      console.error('Error signing up:', error?.message);
    }
  };
  const onPressSignup = (): void => {
    navigation.navigate(screenName.REGISTER_FORM)
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
          <Text style={styles.mobileNumberText}>Email Address</Text>

          <View style={styles.inputContainer}>
            <View style={styles.textBoxContainer}>
              <TextBox
                placeholder="Enter your email address"
                onChange={handleInputChange}
                isEditable={true}
                value={email}
              />
            </View>
          </View>

          <View style={styles.buttonWrapper}>
            <GradientButton  buttonName={"Sign Up"} onPress={()=>signUpWithEmail(email)} containerStyle={styles.buttonContainer} />
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


export default EmailSignupScreen;

