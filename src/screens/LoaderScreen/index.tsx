import React, { useEffect } from 'react';
import { View, Image, Text, StyleSheet, } from 'react-native';
import { ImagePaths } from '../../constant/images';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../interfaces/common';
import screenName from '../../constant/screenName';

const LoaderScreen: React.FC = () => {
  const navigation = useNavigation<RootStackParamList>();
  useEffect(()=>{
    setTimeout(()=>{
      navigation.navigate(screenName.DASHBOARD)
    },3000)
  })
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




