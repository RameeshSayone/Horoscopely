import React, { useState } from 'react';
import { View, ScrollView, Image, Text, StyleSheet } from 'react-native';
import { ImagePaths } from '../../constant/images';
import GradientButton from '../../components/GradientButton';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../interfaces/common';
import DatePickerComponent from '../../components/DatePickerComponent';
import screenName from '../../constant/screenName';
import { fontFamily } from '../../constant/fontFamily';
import { screenSize } from '../../constant/screenSize';
import { StatusBar } from 'react-native';

const SelectDateScreen: React.FC = () => {
  const navigation = useNavigation<RootStackParamList>();
  const [date, setDate] = useState(new Date(1990, 0, 1));
  const handleDateChange = (text: any) => {
    setDate(text);
  };

  const onPressContinue = (): void => {
    navigation.navigate(screenName.SELECT_TIME_SCREEN)
  };
 
  return (
    <View style={styles.container}>
         <StatusBar translucent={true} backgroundColor={'transparent'} />
      <View style={styles.topSection}>
        <Image source={ImagePaths.registerFormTopLayout} style={styles.backgroundImage} />
      </View>

      <ScrollView style={styles.middleSection} contentContainerStyle={styles.middleSectionContent}>
        <Text style={styles.headerText}>Select a date</Text>
        <Text style={styles.title}>You wish to see your horoscope for</Text>
          <View>
            <DatePickerComponent
              mode={"date"}
              handleDateChange={handleDateChange}
              selectedDate={date} />
          </View>
        <GradientButton
          onPress={onPressContinue}
          containerStyle={styles.buttonContainer}
          buttonName={"Done"}
        />
      </ScrollView>

    </View>
  );
};

export default SelectDateScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F7F6F8',
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
    backgroundImage: {
      width: screenSize.width,
      height: screenSize.height / 2.5,
      resizeMode: 'stretch',
    },
    headerText: {
      fontFamily: fontFamily.bold,
      fontSize: 28,
      color: '#292929',
      marginTop: 40,
      marginBottom: 10,
      lineHeight: 34,
    },
    title: {
      fontFamily: fontFamily.medium,
      fontSize: 18,
      color: '#292929',
      marginBottom: 10,
      lineHeight: 21,
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
  
