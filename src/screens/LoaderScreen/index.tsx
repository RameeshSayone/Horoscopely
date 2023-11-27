import React from 'react';
import { View, Image, Text, StyleSheet, } from 'react-native';
import { ImagePaths } from '../../constant/images';
import { styles } from './styles';

const LoaderScreen: React.FC = () => {

  return (
    <View style={styles.container}>
      <Image
        source={ImagePaths.loaderBg} 
        style={styles.backgroundImage}
      />

      <Image
        source={ImagePaths.loaderIcon}
        style={styles.middleImage}
        resizeMode="contain"
      />
      <Image
        source={ImagePaths.loaderLogo}
        style={styles.middleLogo}
        resizeMode="contain"
      />

      <View style={styles.bottomContainer}>
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    </View>
  );
};
export default LoaderScreen;




