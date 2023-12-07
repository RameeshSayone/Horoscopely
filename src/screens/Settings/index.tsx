import React from 'react';
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView, StatusBar } from 'react-native';
import { FlatList } from 'react-native';
import SwitchToggle from 'react-native-switch-toggle';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../interfaces/common';
import { ImagePaths } from '../../constant/images';
import { styles } from './styles';
import screenName from '../../constant/screenName';

interface Card {
  id: string;
  title: string;
  description: string;
  toggleStatus: boolean;
}

interface Props {
  data: Card[];
}

const subTitle = 'Receive Promotions / Campaigns';

const data = [
  {
    id: '1',
    title: 'Horoscope',
    description: 'Get notified of the horoscope',
    toggleStatus: false,
  },
  {
    id: '2',
    title: 'Push Notifications',
    description: 'Receive notifications of Horoscope and Payment Details',
    toggleStatus: true,
  },
  {
    id: '3',
    title: 'Payment Details',
    description: 'Get notified at the end of the subscription plan',
    toggleStatus: false,
  },
  {
    id: '4',
    title: 'Set time',
    description: 'Set time for daily horoscope',
    toggleStatus: true,
  },
  {
    id: '5',
    title: 'Emails',
    description: 'Get promotions & campaigns through email',
    toggleStatus: false,
  },
  {
    id: '6',
    title: 'SMS',
    description: 'Get promotions & campaigns through SMS',
    toggleStatus: false,
  },
];

const CardListItem: React.FC<Card> = ({ title, description, toggleStatus }) => {
  const navigation = useNavigation<RootStackParamList>();
  return(
  <View style={styles.cardContainer}>
    <Text style={styles.carDtitle}>{title}</Text>
    {(title === 'Emails' || title === 'SMS') && (
      <Text style={styles.subTitle}>{subTitle}</Text>
    )}
    <View style={styles.rowContainer}>
      <Text style={styles.description}>{description}</Text>
      {title === 'Set time' ? (
        <TouchableOpacity 
         style={styles.arrowContainer}
         onPress={()=>navigation.navigate(screenName.SELECT_DATE_SCREEN)}
         >
          <Image source={ImagePaths.arrow} style={styles.arrowIcon} />
        </TouchableOpacity>
      ) : (
        <SwitchToggle
          switchOn={toggleStatus}
          onPress={() => {}}
          circleColorOff="#FFFFFF"
          circleColorOn="#FFFFFF"
          backgroundColorOn="#C618F9"
          backgroundColorOff="#78788029"
          containerStyle={styles.toggleContainer}
          circleStyle={{
            width: 23,
            height: 23,
            borderRadius: 20,
            right:toggleStatus?3:-3
          }}

        />
      )}
    </View>
  </View>
)
};

const Settings: React.FC = () => {
  const navigation = useNavigation<RootStackParamList>();

  const handleBack = () => {
    navigation.goBack();
  };

  const renderItem = ({ item }: { item: Card }) => (
    <CardListItem
      id={item.id}
      title={item.title}
      description={item.description}
      toggleStatus={item.toggleStatus}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent={false} backgroundColor={'#F2F2F2'} />
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButtonContainer}
          onPress={handleBack}>
          <Image source={ImagePaths.arrow} style={styles.backButton} />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Settings</Text>
        </View>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.notificationHeader}>
          <Text style={styles.notificationHeaderText}>Notifications</Text>
        </View>
        <ScrollView
          style={styles.scrollView}
          nestedScrollEnabled
          horizontal
          bounces={false}
          showsHorizontalScrollIndicator={false}>
          <FlatList
            data={data}
            showsVerticalScrollIndicator={false}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Settings;