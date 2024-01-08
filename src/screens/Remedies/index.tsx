import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { ImagePaths } from '../../constant/images';
import styles from './styles';

interface Card {
  id: number;
  title: string;
  description: string;
  color: string[];
}

interface Props {
  data: Card[];
}

const description =
  'Lorem ipsum dolor sit amet, consectetu adip iscing elit. Sed malesuada ullamcorper Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
const data = [
  {
    id: 1,
    title: 'Health',
    description: description,
    color: ['#30D2C2', '#14C17B'],
  },
  {
    id: 2,
    title: 'Career',
    description: description,
    color: ['#0ACDFF', '#446FFE'],
  },
  {
    id: 3,
    title: 'Love',
    description: description,
    color: ['#FE3D91', '#FF6BBA'],
  },
];

const Remedies: React.FC = () => {
  const renderItem = ({ item }: { item: Card }) => (
    <LinearGradient
      colors={item.color}
      start={{ x: 0, y: 0.5 }}
      end={{ x: 1, y: 0.5 }}
      style={styles.linearGradient}
    >
      <View style={styles.cardHeader}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <TouchableOpacity>
          <Image
            source={ImagePaths.share}
            style={styles.shareIcon}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.cardDescription}>{item.description}</Text>
    </LinearGradient>
  );

  return (
    <ImageBackground
      source={ImagePaths.bottomTabBg}
      style={styles.container}
    >
      <Text style={styles.title}>Remedies</Text>
      <View style={{ flex: 1, marginHorizontal: 25 }}>
        <FlatList
          bounces={false}
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          horizontal={false}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        />
      </View>
    </ImageBackground>
  );
};

export default Remedies;
