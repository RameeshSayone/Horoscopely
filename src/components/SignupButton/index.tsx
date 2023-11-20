import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';

interface SignupButtonProps {
  onPress: () => void;
  containerStyle: any;
}

const SignupButton: React.FC<SignupButtonProps> = ({ onPress, containerStyle }) => {
  return (
    <TouchableOpacity style={[styles.buttonContainer, containerStyle]} onPress={onPress}>
      <LinearGradient
        colors={['#32A0EE', '#9713C6']}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        style={styles.buttonGradient}
      >
        <View style={styles.innerContainer}>
          <Text style={styles.labelStyle}>Sign Up</Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default SignupButton;



