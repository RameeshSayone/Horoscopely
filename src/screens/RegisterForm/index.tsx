import React, { useState } from 'react';
import { View, ScrollView, Image, Text, TouchableOpacity } from 'react-native';
import { ImagePaths } from '../../constant/images';
import TextBox from '../../components/TextBox';
import GradientButton from '../../components/GradientButton';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../interfaces/common';
import PaginationComponent from '../../components/PaginationComponent';
import DatePickerComponent from '../../components/DatePickerComponent';
import RadioButtonGroup from '../../components/RadioButtonGroup';
import SwitchToggle from 'react-native-switch-toggle';
import { styles } from './styles';
import screenName from '../../constant/screenName';

const RegisterForm: React.FC = () => {
  const navigation = useNavigation<RootStackParamList>();
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [dob, setDob] = useState(new Date(1990, 0, 1));
  const [tob, setTob] = useState(new Date(1990, 0, 1));
  const [pob, setPob] = useState<string>('');
  const [pageNumber, setPageNumber] = useState<number>(0);
  const genderOptions = ['Male', 'Female',];
  const relationShipOptions = ['Single', 'Married', 'Engaged', 'In a Relationship'];
  const [gender, setGender] = useState<string>('Female');
  const [relationShipStatus, setRelationShipStatus] = useState<string>('Single');
  const [isPusNotification, setIsPusNotification] = useState<boolean>(false);

  const handleNameChange = (text: string) => {
    setName(text);
  };
  const onTogglePress = () => {
    setIsPusNotification(!isPusNotification);
  };

  const handleEmailChange = (text: string) => {
    setEmail(text);
  };
  const handleDobChange = (text: any) => {
    setDob(text);
  };
  const handleTobChange = (text: any) => {
    setTob(text);
  };
  const handlePobChange = (text: string) => {
    setPob(text);
  };
  const handleGenderChange = (text: string) => {
    setGender(text);
  };
  const handleRelationShipStatusChange = (text: string) => {
    setRelationShipStatus(text);
  };

  const onPressContinue = (): void => {
    if(pageNumber<7)
    setPageNumber(pageNumber + 1);
    else
    navigation.navigate(screenName.OTP_VERIFICATION)
  };
  const handleDateChange = (date: Date) => {
    console.log('Selected Date:', date);
  };

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Image source={ImagePaths.registerFormTopLayout} style={styles.backgroundImage} />
      </View>

      <ScrollView style={styles.middleSection} contentContainerStyle={styles.middleSectionContent}>
        <Text style={styles.headerText}>Welcome User</Text>
        <Text style={styles.title}>Let's Get Started!</Text>
        {pageNumber == 0 &&
          <View>
            <Text style={styles.label}>Name</Text>
            <TextBox
              placeholder="Enter your name"
              onChange={handleNameChange}
              isEditable={true}
              value={name}
            />
          </View>
        }
        {pageNumber == 1 &&
          <View>
            <Text style={styles.label}>Email Address</Text>
            <TextBox
              placeholder="Enter your email address"
              onChange={handleEmailChange}
              isEditable={true}
              value={email}
            />
          </View>
        }
        {pageNumber == 2 &&
          <View>
            <Text style={styles.label}>Date of Birth</Text>
            <DatePickerComponent
              mode={"date"}
              handleDateChange={handleDobChange}
              selectedDate={dob} />
          </View>
        }
        {pageNumber == 3 &&
          <View>
            <Text style={styles.label}>Time of Birth</Text>
            <DatePickerComponent
              mode={"time"}
              handleDateChange={handleTobChange}
              selectedDate={tob}
            />
          </View>
        }
        {pageNumber == 4 &&
          <View>
            <Text style={styles.label}>Place of Birth</Text>
            <TextBox
              placeholder="Enter your place of birth"
              onChange={handlePobChange}
              isEditable={true}
              value={email}
            />
          </View>
        }
        {pageNumber == 5 &&
          <View>
            <Text style={styles.label}>Birth Gender</Text>
            <RadioButtonGroup
              options={genderOptions}
              selected={gender}
              handleChange={handleGenderChange}
            />
          </View>
        }
        {pageNumber == 6 &&
          <View>
            <Text style={styles.label}>Relationship Status</Text>
            <RadioButtonGroup
              options={relationShipOptions}
              selected={relationShipStatus}
              handleChange={handleRelationShipStatusChange}
            />
          </View>
        }
        {pageNumber == 7 &&
          <View style={styles.notificationContainer}>
            <Text style={styles.label}>Push Notifications</Text>
            <SwitchToggle
              switchOn={isPusNotification}
              onPress={() => onTogglePress()}
              circleColorOff="#C4C4C4"
              circleColorOn="#B342F2"
              backgroundColorOn="#FFFFFF"
              backgroundColorOff="#FFFFFF"
              containerStyle={{
                width: 52,
                height: 24,
                borderRadius: 25,
                borderColor: isPusNotification ? '#F1CAF9' : '#C4C4C4',
                borderWidth: 2,
                top:10
              }}
              circleStyle={{
                width: 30,
                height: 30,
                borderRadius: 20,
              }}
            />
          </View>
        }
        <GradientButton
          onPress={onPressContinue}
          containerStyle={styles.buttonContainer}
          buttonName={pageNumber==7?"Ready to Go":"Continue"}
        />
        {pageNumber == 3 &&
          <View>
            <TouchableOpacity>
              <Text style={styles.skipText}>Skip</Text>
            </TouchableOpacity>
            <Text style={styles.infoText}>
              Skipping this section may affect the accuracy of predictions.
              You can add your 'time of birth' in the profile section later.
            </Text>
          </View>}
      </ScrollView>

      <View style={styles.bottomSection}>
        <PaginationComponent
          activeIndex={pageNumber}
          totalCircles={8} />
      </View>
    </View>
  );
};

export default RegisterForm;
