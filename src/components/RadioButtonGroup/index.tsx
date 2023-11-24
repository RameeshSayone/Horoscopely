import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { fontFamily } from '../../constant/fontFamily';

interface RadioButtonGroupProps {
  options: string[];
  selected:string;
  handleChange:(value:string) => void;
}

const RadioButtonGroup: React.FC<RadioButtonGroupProps> = ({ options ,selected,handleChange}) => {
  const [selectedOption, setSelectedOption] = useState<string>(selected);

  const handleSelectOption = (option: string) => {
    setSelectedOption(option);
    handleChange(option);
  };

  return (
    <View style={{flexDirection:'row',flexWrap:'wrap'}}>
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
            ]}></View>
          </TouchableOpacity>
          <Text
              style={[
                styles.radioButtonText,
              ]}
            >
              {option}
            </Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  radioButtonRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginVertical: 8,
    width:'50%'
  },
  radioButtonContainer: {
    borderWidth: 2,
    borderColor: '#328AEE',
    borderRadius: 10,
    width:20,
    height:20,
    marginRight: 8,
    justifyContent:'center',
    alignItems:'center'
  },
  radioButton: {
    width:12,
    height:12,
  },
  radioButtonSelected: {
    backgroundColor:"#B342F2",
    borderRadius: 10,
    width:12,
    height:12,
    borderColor:'B342F2'
  },
  radioButtonText: {
    fontSize: 15,
    fontFamily:fontFamily.regular,
    color:'#09182B',
    lineHeight:18
  },
});

export default RadioButtonGroup;
