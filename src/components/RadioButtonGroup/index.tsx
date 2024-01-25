import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

interface RadioButtonGroupProps {
  options: string[];
  selected:string;
  handleChange:(value:string) => void;
  activeColor:string;
  labelColor:string;
}

const RadioButtonGroup: React.FC<RadioButtonGroupProps> = ({ options ,selected,handleChange,activeColor,labelColor}) => {
  const [selectedOption, setSelectedOption] = useState<string>(selected);

  const handleSelectOption = (option: string) => {
    setSelectedOption(option);
    handleChange(option);
  };

  return (
    <View style={styles.container}>
      {options.map((option, index) => (
        <View key={index} style={styles.radioButtonRow}>
          <TouchableOpacity
            style={[
              styles.radioButtonContainer,
            ]}
            onPress={() => handleSelectOption(option)}
          >
            <View style={[
              styles.radioButton,
              selectedOption === option && styles.radioButtonSelected,
              selectedOption === option && {backgroundColor:activeColor}
            ]}></View>
          </TouchableOpacity>
          <Text
              style={[
                styles.radioButtonText,
                {color:labelColor}
              ]}
            >
              {option}
            </Text>
        </View>
      ))}
    </View>
  );
};



export default RadioButtonGroup;
