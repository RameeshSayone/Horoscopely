import React from 'react';
import { TouchableOpacity, Text, Image, View, StyleSheet } from 'react-native';

interface RoundedButtonProps {
  onPress: () => void;
  buttonName: string;
  imageUrl: any;
  labelStyle:any,
  iconStyle:any,
  containerStyle:any
}

const RoundedButton: React.FC<RoundedButtonProps> = ({ onPress, buttonName, imageUrl ,labelStyle,iconStyle,containerStyle}) => {
  return (
    <TouchableOpacity style={[styles.buttonContainer,containerStyle]} onPress={onPress}>
        <Image source={imageUrl} style={[styles.image,iconStyle]} />

      <View style={styles.innerContainer}>
        <Text style={[labelStyle]}>{buttonName}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 30,
    overflow: 'hidden',
    marginVertical:15,
    padding:15
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    marginRight: 10,
   
    resizeMode:'contain'
  },
});

export default RoundedButton;
