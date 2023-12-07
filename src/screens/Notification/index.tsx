import React, { useState } from 'react';
import {
  Image,
  ImageBackground,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ImagePaths } from '../../constant/images';
import { RootStackParamList } from '../../interfaces/common';
import { styles } from './styles';
import screenName from '../../constant/screenName';

interface Card {
  id: number;
  title: string;
  isRead: boolean;
  description: string;
  time: string;
}

interface Props {
  data: Card[];
}

const description =
  'Lorem ipsum dolor sit amet, consectetur adipis cing elit. Sed malesuada ullamcorper';
const data = [
  {
    id: 1,
    title: 'Horoscope',
    isRead: false,
    description: description,
    time: '3 minutes ago',
  },
  {
    id:2,
    title:'Future prediction',
    isRead:false,
    description:description,
    time:'22 June'
  },
  {
    id:3,
    title:'Payment',
    isRead:true,
    description:description,
    time:'17 August'
  },
  {
    id:4,
    title:'Horoscope',
    isRead:true,
    description:description,
    time:'22 June'
  },
  {
    id:5,
    title:'Horoscope',
    isRead:true,
    description:description,
    time:'12 June'
  },
  {
    id:6,
    title:'Horoscope',
    isRead:true,
    description:description,
    time:'27 June'
  },
];

const Notification: React.FC = () => {
  const navigation = useNavigation<RootStackParamList>();
  const [isDetailView, setIsDetailView] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Card>(data[0]);

  const setDetailView = (item: Card) => {
    setIsDetailView(true);
    setSelectedItem(item);
  };

  const handleBack = () => {
    if (isDetailView) {
      setIsDetailView(false);
    } else {
      navigation.goBack();
    }
  };

  const renderItem = ({ item }: { item: Card }) => (
    <TouchableOpacity
      onPress={() => {
        setDetailView(item);
      }}
      style={styles.listItem}
    >
      <View style={styles.listItemContent}>
        <Text style={styles.listItemTitle}>{item.title}</Text>
        <Text style={styles.listItemTime}>{item.time}</Text>
      </View>
      <View style={styles.listItemDescriptionContainer}>
        {!item.isRead && <View style={styles.unreadIndicator} />}
        <Text style={[
            styles.listItemDescription,
            {paddingLeft:!item.isRead?0:15}
            ]}>
            {item.description}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent={false} backgroundColor={'#000000'} />
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack}>
          <Image source={ImagePaths.arrow} style={styles.backButton} />
        </TouchableOpacity>
        <Text style={styles.title}>Notification</Text>
        <TouchableOpacity onPress={()=>navigation.navigate(screenName.SETTINGS)}>
            <Image source={ImagePaths.settings} style={styles.settingsIcon} />
        </TouchableOpacity>
      </View>
      <ImageBackground source={ImagePaths.bottomTabBg} style={styles.container}>
        {!isDetailView ? (
          <View style={{ flex: 1, padding: 25 }}>
            <FlatList
              bounces={false}
              data={data}
              renderItem={renderItem}
              keyExtractor={(item) => item.id.toString()}
              horizontal={false}
              showsVerticalScrollIndicator={false}
            />
          </View>
        ) : (
          <View style={styles.detailViewContainer}>
            <View style={styles.detailViewContent}>
              <Text style={styles.listItemTitle}>{selectedItem.title}</Text>
              <Text style={styles.listItemTime}>{selectedItem.time}</Text>
            </View>
            <View style={styles.listItemDescriptionContainer}>
              <Text style={styles.listItemDescription}>{selectedItem.description}</Text>
            </View>
          </View>
        )}
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Notification;
