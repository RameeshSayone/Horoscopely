import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import TextBox from '../TextBox';
import { ImagePaths } from '../../constant/images';
import { styles } from './styles';

interface CustomDropdownProps {
  options: string[];
  onSelectOption: (selectedOption: string) => void;
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({ options, onSelectOption }) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    onSelectOption(option);
    toggleDropdown();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        onPress={toggleDropdown} 
        style={styles.inputContainer}
        activeOpacity={1}
      >
        <TextBox
          placeholder="+000"
          value={selectedOption}
          isEditable={false}
          onChange={() => {}}
        />
        <Image
          source={ImagePaths.downArrow}
          style={styles.arrowIcon}
        />
      </TouchableOpacity>

      {isDropdownVisible && (
        <FlatList
          data={options}
          showsVerticalScrollIndicator={true}
          nestedScrollEnabled={true}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleOptionSelect(item)} style={styles.optionItem}>
              <Text>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
          style={styles.dropdownList}
        />
      )}
    </View>
  );
};

export default CustomDropdown;