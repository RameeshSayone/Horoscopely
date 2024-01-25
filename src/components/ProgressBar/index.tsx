import React from 'react';
import { View, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { styles } from './styles';

interface ProgressBarProps {
  progress: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <View style={styles.mainContainer}>
        <View style={styles.container}>
        <LinearGradient
            colors={['#C618F9', '#F785FF']}
            useAngle={true}
            angle={94}
            style={[styles.progressBar, { flex: progress }]}
        ></LinearGradient>
        </View>
        <Text style={styles.progressText}>{Math.floor(progress * 100)}%</Text>
    </View>
  );
};

export default ProgressBar;