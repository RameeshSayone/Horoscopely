import React from 'react';
import { Image, ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import { ImagePaths } from '../../constant/images';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../interfaces/common';
import GradientButton from '../../components/GradientButton';
import { FlatList } from 'react-native';
import { ImageSourcePropType } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { styles } from './styles';

interface Card {
  id: number;
  title: string;
  logo: ImageSourcePropType;
  selected: boolean;
}

interface Props {
  data: Card[];
}

 const data=[
    {
        id:1,
        title:'Profession',
        logo:ImagePaths.profession,
        selected:false
    },
    {
        id:2,
        title:'Personal Life',
        logo:ImagePaths.personalLife,
        selected:false
    },
    {
        id:3,
        title:'Travel',
        logo:ImagePaths.travel,
        selected:false
    },
    {
        id:4,
        title:'Health',
        logo:ImagePaths.health,
        selected:true
    },
    {
        id:5,
        title:'Luck',
        logo:ImagePaths.luck,
        selected:false
    },
    {
        id:6,
        title:'Emotion',
        logo:ImagePaths.emotion,
        selected:true
    },
  ]

const ManageInterest: React.FC = () => {
  const navigation = useNavigation<RootStackParamList>();

  const onPressContinue = (): void => {
    navigation.goBack();
  };

  const renderItem = ({ item }: { item: Card }) => (
    <View style={styles.cardContainer}>
      <TouchableOpacity style={styles.cardButton} onPress={() => {}}>
        <LinearGradient
          colors={item.selected ? ['#74D2F6', '#B55DF8'] : ['#F2F2F2', '#FFFFFF']}
          useAngle={true}
          angle={45}
          style={[
            styles.cardGradient,
            { borderColor: !item.selected ? '#FFFFFF' : '#DC67FF' },
          ]}
        >
          <Image source={item.logo} style={styles.cardImage} />
        </LinearGradient>
      </TouchableOpacity>
      <Text style={styles.cardText}>{item.title}</Text>
    </View>
  );

  return (
    <ImageBackground source={ImagePaths.hashBg} style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Image source={ImagePaths.arrow} style={{ width: 18, height: 29 }} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Manage Interest</Text>
      </View>
      <FlatList
        numColumns={2}
        bounces={false}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        horizontal={false}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{ width: 10, height: 10 }} />}
        style={styles.listContainer}
      />
      <View style={styles.footerContainer}>
        <TouchableOpacity>
          <Text style={styles.resetButton}>Reset</Text>
        </TouchableOpacity>
        <GradientButton
          onPress={onPressContinue}
          containerStyle={{
            shadowColor: '#000000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
            marginVertical: 0,
            width: 125,
          }}
          buttonName={'Done'}
        />
      </View>
    </ImageBackground>
  );
};

export default ManageInterest;


