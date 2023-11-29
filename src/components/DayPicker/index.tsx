import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { ImagePaths } from '../../constant/images';
import { styles } from './styles';

interface CustomDropdownProps {
  options: string[];
  isDropdownVisible: boolean;
  toggleDropdown: () => void;
}

const DayPicker: React.FC<CustomDropdownProps> = ({ options, isDropdownVisible, toggleDropdown }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(options[0]);

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    toggleDropdown();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => toggleDropdown()} style={styles.dropdownButton}>
        <Text style={styles.labelText}>{selectedOption || 'Select an option'}</Text>
        <Image source={ImagePaths.downArrow} style={styles.downArrow} />
      </TouchableOpacity>

      {isDropdownVisible && (
        <View style={styles.dropdownList}>
          {options.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={styles.dropdownItem}
              onPress={() => handleOptionSelect(option)}
            >
              <Text style={styles.labelText}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

export default DayPicker;

