import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';

interface GradientButtonProps {
  onPress: () => void;
  containerStyle: any;
  buttonName:string;
  checkDisable: () => boolean;
}

const GradientButton: React.FC<GradientButtonProps> = ({ onPress, containerStyle,buttonName ,checkDisable}) => {
  return (
    <TouchableOpacity 
    disabled={checkDisable()}
    style={[styles.buttonContainer, containerStyle]} onPress={onPress}>
      <LinearGradient
        colors={['#32A0EE', '#9713C6']}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        style={styles.buttonGradient}
      >
        <View style={styles.innerContainer}>
          <Text style={styles.labelStyle}>{buttonName}</Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default GradientButton;



