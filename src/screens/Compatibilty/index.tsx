import React from 'react';
import { Text, ImageBackground, TouchableOpacity } from 'react-native';
import { ImagePaths } from '../../constant/images';
import CompatibiltySlider from '../../components/CompatibiltySlider';
import { styles } from './styles';

const carouselData = [
  {
    name: 'Capricorn',
    logo: ImagePaths.ariesSlider,
    date: 'Mar 22 - Apr 19',
    name1: 'Capricorn',
    logo1: ImagePaths.scorpionSlider,
    date1: 'Mar 22 - Apr 19',
  },
  {
    name: 'Capricorn',
    logo: ImagePaths.scorpionSlider,
    date: 'Mar 22 - Apr 19',
    name1: 'Capricorn',
    logo1: ImagePaths.ariesSlider,
    date1: 'Mar 22 - Apr 19',
  },
  {
    name: 'Capricorn',
    logo: ImagePaths.ariesSlider,
    date: 'Mar 22 - Apr 19',
    name1: 'Capricorn',
    logo1: ImagePaths.scorpionSlider,
    date1: 'Mar 22 - Apr 19',
  },
];

const Compatibilty: React.FC = () => {
  return (
    <ImageBackground source={ImagePaths.bottomTabBg} style={styles.container}>
      <Text style={styles.title}>Compatibility</Text>
      <CompatibiltySlider data={carouselData} />
      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Check Compatibility</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default Compatibilty;
