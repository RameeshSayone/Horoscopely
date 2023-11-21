import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, Image, Text } from 'react-native';
import { ImagePaths } from '../../constant/images';
import { screenSize } from '../../constant/screenSize';
import { fontFamily } from '../../constant/fontFamily';
import TextBox from '../../components/TextBox';
import GradientButton from '../../components/GradientButton';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../interfaces/common';
import PaginationComponent from '../../components/PaginationComponent';

const RegisterNameForm: React.FC = () => {
  const navigation = useNavigation<RootStackParamList>();
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [pageNumber, setPageNumber] = useState<number>(0);


  const handleNameChange = (text: string) => {
    setName(text);
  };
  const handleEmailChange = (text: string) => {
    setEmail(text);
  };

  const onPressContinue = (): void => {
   setPageNumber(pageNumber+1)
  };

 
  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
      <Image source={ImagePaths.registerFormTopLayout} style={styles.backgroundImage} />
      </View>

      <ScrollView style={styles.middleSection} contentContainerStyle={styles.middleSectionContent}>
      <Text style={styles.headerText}>Welcome User</Text>
      <Text style={styles.title}>Let's Get Started!</Text>
      {pageNumber==0&&
      <View>
      <Text style={styles.label}>Name</Text>
      <TextBox
                placeholder="Enter your name"
                onChange={handleNameChange}
                isEditable={true}
                value={name}
              />
               <GradientButton 
               onPress={onPressContinue} 
               containerStyle={styles.buttonContainer}
               buttonName={"Continue"}
               />
      </View>
      }
      {pageNumber==1&&
      <View>
      <Text style={styles.label}>Email Address</Text>
      <TextBox
                placeholder="Enter your email address"
                onChange={handleEmailChange}
                isEditable={true}
                value={email}
              />
               <GradientButton 
               onPress={onPressContinue} 
               containerStyle={styles.buttonContainer}
               buttonName={"Continue"}
               />
      </View>
      }
     
      </ScrollView>

      {/* Bottom Section */}
      <View style={styles.bottomSection}>
       <PaginationComponent
       activeIndex={pageNumber}
       totalCircles={8}/>
      </View>
    </View>
  );
};

// Define styles using StyleSheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#F7F6F8'
  },
  topSection: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  middleSection: {
    flex: 1,
  },
  middleSectionContent: {
    paddingHorizontal: 30,
  },
  bottomSection: {
    paddingVertical:20
  },
  backgroundImage: {
    width: screenSize.width,
    height: screenSize.height/2.5,
    resizeMode: 'stretch',
  },
  headerText: {
    fontFamily: fontFamily.bold,
    fontSize: 18,
    color: '#292929',
    marginTop: 10,
    marginBottom: 10,
    lineHeight:21
  },
  title:{
    fontFamily: fontFamily.bold,
    fontSize: 24,
    color: '#292929',
    marginTop: 10,
    marginBottom: 10,
    lineHeight:29
  },
  label:{
    fontFamily: fontFamily.semiBold,
    fontSize: 17,
    color: '#060606',
    marginTop: 30,
    marginBottom: 10,
    lineHeight:20
  },
  buttonContainer: {
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

});

// Export the RegisterNameForm component
export default RegisterNameForm;
