import React from 'react';
import { Image, ImageBackground, Text, View } from 'react-native';
import { ImagePaths } from '../../constant/images';
import { styles } from './styles';

const VersionDetails: React.FC = () => {
  return (
    <ImageBackground source={ImagePaths.versionBg} style={styles.container}>
      <Text style={styles.appName}>Horoscope.ly Astrology App</Text>
      <Text style={styles.versionText}>Version 2.21.11.18</Text>
      <Image source={ImagePaths.logo} style={styles.logo} />
      <Text style={styles.copyrightText}>@2021-2028 Horoscope.ly Inc</Text>
    </ImageBackground>
  );
};

export default VersionDetails;