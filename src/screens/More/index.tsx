import React from 'react';
import { View, Text, ImageBackground, Image, FlatList, TouchableOpacity, ImageSourcePropType } from 'react-native';
import { ImagePaths } from '../../constant/images';
import { styles } from './styles';
import { RootStackParamList } from '../../interfaces/common';
import { useNavigation } from '@react-navigation/native';
import screenName from '../../constant/screenName';

interface Card {
  id: number;
  title: string;
  logo: ImageSourcePropType;
}

interface Props {
  data: Card[];
}

const data = [
  {
    id: 1,
    title: 'Subscription Packages',
    logo: ImagePaths.subcription,
  },
  {
    id: 2,  
    title: 'Manage Interest',
    logo: ImagePaths.manageInterest,
  },
  {
    id: 3,
    title: 'View Profile',
    logo: ImagePaths.profile,
  },
  {
    id: 4,
    title: 'Invite Friends',
    logo: ImagePaths.inviteFriends,
  },
  {
    id: 5,
    title: 'View Reports',
    logo: ImagePaths.viewReports,
  },
  {
    id: 6,
    title: 'Manage Payment',
    logo: ImagePaths.managePayment,
  },
  {
    id: 7,
    title: 'View Profile',
    logo: ImagePaths.profile,
  },
  {
    id: 8,
    title: 'Settings',
    logo: ImagePaths.settings,
  },
  {
    id: 9,
    title: 'FAQs',
    logo: ImagePaths.faq,
  },
  {
    id: 10,
    title: 'Help',
    logo: ImagePaths.help,
  },
  {
    id: 11,
    title: 'Terms and Privacy',
    logo: ImagePaths.termsAndPrivacy,
  },
  {
    id: 12,
    title: 'App Info',
    logo: ImagePaths.info,
  },
  {
    id: 13,
    title: 'Ios Verification',
    logo: ImagePaths.info,
  },
  {
    id: 14,
    title: 'Error',
    logo: ImagePaths.info,
  },
  {
    id: 15,
    title: 'Offline',
    logo: ImagePaths.info,
  },
];

const More: React.FC = () => {
  const navigation = useNavigation<RootStackParamList>();
  const onPressItem=(title:string)=>{
    switch(title){
      case 'Manage Interest':
        navigation.navigate(screenName.MANAGE_INTEREST);
        break;
      case 'Manage Payment':
        navigation.navigate(screenName.MANAGE_PAYMENT);
        break;
      case 'View Reports':
        navigation.navigate(screenName.VIEW_REPORTS);
        break;
      case 'FAQs':
        navigation.navigate(screenName.FAQ);
        break;
      case 'Terms and Privacy':
        navigation.navigate(screenName.TERMS_AND_CONDITION);
        break;
      case 'Subscription Packages':
        navigation.navigate(screenName.VIEW_PACKAGES);
        break;
      case 'App Info':
        navigation.navigate(screenName.VERSION_DETAILS);
        break;
      case 'Error':
        navigation.navigate(screenName.ERROR_404);
        break;
      case 'Ios Verification':
        navigation.navigate(screenName.IOS_VERIFICATION);
        break;
      case 'Offline':
        navigation.navigate(screenName.OFFLINE_PAGE);
        break;
      default :
      navigation.navigate(screenName.IOS_VERIFICATION);
    }
  }
  const renderItem = ({ item }: { item: Card }) => (
    <TouchableOpacity 
    onPress={()=>onPressItem(item.title)}
    style={styles.itemContainer}>
      <View style={styles.itemContent}>
        <Image source={item.logo} style={styles.itemImage} />
        <Text style={styles.itemText}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <ImageBackground source={ImagePaths.bottomTabBg} style={styles.container}>
      <View style={styles.mainContainer}>
      <View style={styles.headerContainer}>
          <View style={styles.headerLine} />
          <Image source={ImagePaths.logo} style={styles.logoImage} />
          <Text style={styles.contactText}>For any queries : 987654321</Text>
      </View>
          <View style={styles.separator} />
          <FlatList
            bounces={false}
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            horizontal={false}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
          />
        </View>
    </ImageBackground>
  );
};



export default More;
