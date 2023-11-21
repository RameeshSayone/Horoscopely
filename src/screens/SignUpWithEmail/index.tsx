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

const EmailSignupScreen: React.FC = () => {
  const navigation = useNavigation<RootStackParamList>();
  const [inputText, setInputText] = useState<string>('');

  const handleInputChange = (text: string) => {
    setInputText(text);
  };

  const onPressSignup = (): void => {
    navigation.navigate(screenName.REGISTER_NAME_FORM)
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
                value={inputText}
              />
            </View>
          </View>

          <View style={styles.buttonWrapper}>
            <GradientButton  buttonName={"Sign Up"} onPress={onPressSignup} containerStyle={styles.buttonContainer} />
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

