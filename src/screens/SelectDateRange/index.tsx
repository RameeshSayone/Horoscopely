import React, { useState } from 'react';
import { Image, ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import { ImagePaths } from '../../constant/images';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../interfaces/common';
import GradientButton from '../../components/GradientButton';
import { ImageSourcePropType } from 'react-native';
import { styles } from './styles';
import DatePicker from 'react-native-date-picker';

interface Card {
  id: number;
  title: string;
  logo: ImageSourcePropType;
  selected: boolean;
}

interface Props {
  data: Card[];
}

const SelectDateRange: React.FC = () => {
  const navigation = useNavigation<RootStackParamList>();

  const onPressContinue = (): void => {
    navigation.goBack();
  };

  const [fromDate, setFromDate] = useState(new Date(1990, 0, 1));
  const [toDate, setToDate] = useState(new Date(1990, 0, 1));


  const handleFromDateChange = (text: any) => {
    setFromDate(text);
  };
  const handleToChange = (text: any) => {
    setToDate(text);
  };

  return (
    <ImageBackground source={ImagePaths.hashBg} style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Image source={ImagePaths.arrow} style={{ width: 18, height: 29 }} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Select Date Range</Text>
      </View>

      <View style={styles.dateRangeContainer}>
        <Text style={styles.dateLabel}>Select From Date</Text>
        <DatePicker
          style={styles.datePickerStyle}
          maximumDate={new Date()}
          date={fromDate}
          onDateChange={handleFromDateChange}
          mode={'date'}
          androidVariant="nativeAndroid"
          textColor="#328AEE"
        />
      </View>

      <View style={styles.dateRangeContainer}>
        <Text style={styles.dateLabel}>Select To Date</Text>
        <DatePicker
          style={styles.datePickerStyle}
          maximumDate={new Date()}
          date={toDate}
          onDateChange={handleToChange}
          mode={'date'}
          androidVariant="nativeAndroid"
          textColor="#328AEE"
        />
      </View>

      <View style={styles.footerContainer}>
        <TouchableOpacity>
          <Text style={styles.resetButton}>Reset</Text>
        </TouchableOpacity>
        <GradientButton
          onPress={onPressContinue}
          containerStyle={{
            shadowColor: '#000000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
            marginVertical: 0,
            width: 125,
          }}
          buttonName={'Done'}
        />
      </View>
    </ImageBackground>
  );
};

export default SelectDateRange;


