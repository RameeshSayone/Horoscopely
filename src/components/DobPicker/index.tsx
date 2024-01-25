import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, } from 'react-native';
import { ImagePaths } from '../../constant/images';
import { styles } from './styles';

import { screenSize } from '../../constant/screenSize';
import { fontFamily } from '../../constant/fontFamily';
import { DAYS, MONTHS, YEARS, } from '../../constant/dummyData';
import CustomPickerModal from '../CustomPickerModal';
  
interface CustomDropdownProps {
      month: string;
      day: string;
      year:string;
      setDob: (value:string) => void;
}

const DobPicker: React.FC<CustomDropdownProps> = ({month,day,year,setDob   }) => {
    const [selectedMonth, setSelectedMonth] = useState<string | null>(month);
    const [selectedDay, setSelectedDay] = useState<string | null>(day);
    const [selectedYear, setSelectedYear] = useState<string | null>(year);

  const handleMonthSelect = (option: string) => {
    setSelectedMonth(option);
  };
  const handleDaySelect = (option: string) => {
    setSelectedDay(option);
  };
  const handleYearSelect = (option: string) => {
    setSelectedYear(option);
  };
  useEffect(()=>{
    const dob=`${selectedMonth+' '+selectedDay+' '+selectedYear}`
    setDob(dob)
  },[selectedMonth,selectedDay,selectedYear])

  const [monthVisible, setMonthVisible] = useState(false);
  const [dayVisible, setDayVisible] = useState(false);
  const [yearVisible, setYearVisible] = useState(false);

  const openMonthModal = () => setMonthVisible(true);
  const openDayModal = () => setDayVisible(true);
  const openYearModal = () => setYearVisible(true);

  const closeMonthModal = () => setMonthVisible(false);
  const closeDayModal = () => setDayVisible(false);
  const closeYearModal = () => setYearVisible(false);
  return (
    <View style={styles.container}>
        <Text style={styles.headerText}>{"Date of Birth"}</Text>
    <View style={{
        flexDirection:'row',
    }}>
        <View style={{
             width:( screenSize.width-70)/3,
        }}>
        <TouchableOpacity onPress={() => openMonthModal()} style={styles.dropdownButton}>
            <Text style={styles.labelText}>{selectedMonth?.substring(0,3)}</Text>
            <Image source={ImagePaths.downArrow} style={styles.downArrow} />
        </TouchableOpacity>
            <CustomPickerModal
            data={MONTHS}
            isVisible={monthVisible}
            onClose={closeMonthModal}
            onClickItem={handleMonthSelect}
        />
         </View>
         <View style={{
             width:( screenSize.width-70)/3,
             marginHorizontal:10
        }}>
        <TouchableOpacity onPress={() => openDayModal()} style={styles.dropdownButton}>
            <Text style={styles.labelText}>{selectedDay?.substring(0,3)}</Text>
            <Image source={ImagePaths.downArrow} style={styles.downArrow} />
        </TouchableOpacity>
            <CustomPickerModal
            data={DAYS}
            isVisible={dayVisible}
            onClose={closeDayModal}
            onClickItem={handleDaySelect}
        />
         </View>
         <View style={{
             width:( screenSize.width-70)/3,
        }}>
        <TouchableOpacity onPress={() => openYearModal()} style={styles.dropdownButton}>
            <Text style={styles.labelText}>{selectedYear}</Text>
            <Image source={ImagePaths.downArrow} style={styles.downArrow} />
        </TouchableOpacity>
            <CustomPickerModal
            data={YEARS}
            isVisible={yearVisible}
            onClose={closeYearModal}
            onClickItem={handleYearSelect}
        />
         </View>
    </View>
    </View>
  );
};

export default DobPicker;





