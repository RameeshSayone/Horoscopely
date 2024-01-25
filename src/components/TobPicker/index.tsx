import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, } from 'react-native';
import { ImagePaths } from '../../constant/images';

import { screenSize } from '../../constant/screenSize';
import { fontFamily } from '../../constant/fontFamily';
import CustomPickerModal from '../CustomPickerModal';
import { styles } from './styles';
import { HOURS, MINUTES, TYPES } from '../../constant/dummyData';
  
interface CustomDropdownProps {
      hour: string;
      minute: string;
      type:string;
      setTob: (value:string) => void;
}

const TobPicker: React.FC<CustomDropdownProps> = ({hour,minute,type,setTob   }) => {
    const [selectedHour, setSelectedHour] = useState<string | null>(hour);
    const [selectedMinute, setSelectedMinute] = useState<string | null>(minute);
    const [selectedType, setSelectedType] = useState<string | null>(type);

  const handleHourSelect = (option: string) => {
    setSelectedHour(option);
  };
  const handleMinuteSelect = (option: string) => {
    setSelectedMinute(option);
  };
  const handleTypeSelect = (option: string) => {
    setSelectedType(option);
  };
  useEffect(()=>{
    const tob=`${selectedHour+':'+selectedMinute+' '+selectedType}`
    setTob(tob)
  },[selectedHour,selectedMinute,selectedType])

  const [hourVisible, setHourVisible] = useState(false);
  const [minuteVisible, setMinuteVisible] = useState(false);
  const [typeVisible, setTypeVisible] = useState(false);

  const openHourModal = () => setHourVisible(true);
  const openMinuteModal = () => setMinuteVisible(true);
  const openTypeModal = () => setTypeVisible(true);

  const closeHourModal = () => setHourVisible(false);
  const closeMinuteModal = () => setMinuteVisible(false);
  const closeTypeModal = () => setTypeVisible(false);
  return (
    <View style={styles.container}>
        <Text style={styles.headerText}>{"Time of Birth"}</Text>
    <View style={{
        flexDirection:'row',
    }}>
        <View style={{
             width:( screenSize.width-70)/3,
        }}>
        <TouchableOpacity onPress={() => openHourModal()} style={styles.dropdownButton}>
            <Text style={styles.labelText}>{selectedHour?.substring(0,3)}</Text>
            <Image source={ImagePaths.downArrow} style={styles.downArrow} />
        </TouchableOpacity>
            <CustomPickerModal
            data={HOURS}
            isVisible={hourVisible}
            onClose={closeHourModal}
            onClickItem={handleHourSelect}
        />
         </View>
         <View style={{
             width:( screenSize.width-70)/3,
             marginHorizontal:10
        }}>
        <TouchableOpacity onPress={() => openMinuteModal()} style={styles.dropdownButton}>
            <Text style={styles.labelText}>{selectedMinute?.substring(0,3)}</Text>
            <Image source={ImagePaths.downArrow} style={styles.downArrow} />
        </TouchableOpacity>
            <CustomPickerModal
            data={MINUTES}
            isVisible={minuteVisible}
            onClose={closeMinuteModal}
            onClickItem={handleMinuteSelect}
        />
         </View>
         <View style={{
             width:( screenSize.width-70)/3,
        }}>
        <TouchableOpacity onPress={() => openTypeModal()} style={styles.dropdownButton}>
            <Text style={styles.labelText}>{selectedType}</Text>
            <Image source={ImagePaths.downArrow} style={styles.downArrow} />
        </TouchableOpacity>
            <CustomPickerModal
            data={TYPES}
            isVisible={typeVisible}
            onClose={closeTypeModal}
            onClickItem={handleTypeSelect}
        />
         </View>
    </View>
    </View>
  );
};

export default TobPicker;
