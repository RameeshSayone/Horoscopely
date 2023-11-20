import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { fontFamily } from '../../constant/fontFamily';

interface CustomTextInputProps {
  placeholder: string;
  onChange: (text: string) => void;
  value:string;
  isEditable:boolean;
}

const TextBox: React.FC<CustomTextInputProps> = ({ isEditable,placeholder, onChange,value }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onChange}
        value={value}
        editable={isEditable}
        // You can add more props as needed
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  input: {
    padding: 17,
    fontSize:13,
    fontFamily:fontFamily.regular,
    color:'#000000',
    backgroundColor:'#FFFFFF',
    borderRadius:12,
    shadowColor: "#00000060",
    borderColor:'#95959529',
    borderWidth:1,
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 4,
  },
});

export default TextBox;
