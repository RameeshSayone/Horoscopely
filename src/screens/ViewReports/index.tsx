import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StatusBar, Text, TouchableOpacity, View, ImageBackground, FlatList, Image, Platform } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { ImagePaths } from '../../constant/images';
import { styles } from './styles';

interface Card {
  id: number;
  title: string;
  description: string;
  date: string;
}

interface Props {
  data: Card[];
}

const description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada ullamcorper Lorem ipsum dolor sit amet, consectetur adipiscing elit.';

const data = [
  {
    id: 1,
    title: 'Profession',
    date: '13 Jan 2021',
    description: description,
  },
  {
    id: 2,
    title: 'Profession',
    date: '13 Jan 2021',
    description: description,
  },
  {
    id: 3,
    title: 'Profession',
    date: '13 Jan 2021',
    description: description,
  },
  {
    id: 4,
    title: 'Profession',
    date: '13 Jan 2021',
    description: description,
  },
  {
    id: 5,
    title: 'Profession',
    date: '13 Jan 2021',
    description: description,
  },
];

const ViewReports: React.FC = () => {
  const navigation = useNavigation();

  const renderItem = ({ item }: { item: Card }) => (
    <LinearGradient colors={['#446FFE', '#8925AEBF']} useAngle={true} angle={234} style={styles.linearGradient}>
      <View style={styles.rowContainer}>
        <Text style={styles.titleText}>{item.title}</Text>
        <Text style={styles.dateText}>{item.date}</Text>
      </View>
      <Text style={styles.descriptionText}>{item.description}</Text>
      <View style={styles.actionContainer}>
        <TouchableOpacity style={styles.viewDetailButton}>
          <Text style={styles.viewDetailText}>View Detail</Text>
          <Image source={ImagePaths.arrow} style={styles.arrowImage} />
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );

  return (
    <View style={styles.container}>
        <StatusBar translucent={false} backgroundColor={'#F2F2F2'} />
      <View style={styles.headerContainer}>
        <View style={styles.headerRow}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={ImagePaths.arrow} style={styles.backButton} />
          </TouchableOpacity>
          <View style={styles.headerTextContainer}>
            <Text style={styles.headerText}>View Reports</Text>
          </View>
        </View>
        <View style={styles.dateRangeContainer}>
          <View style={styles.dateRangeTextContainer}>
            <View>
              <Text style={styles.dateRangeLabelText}>Selected Date Range</Text>
              <Text style={styles.dateRangeText}>31 Dec 2020 - 05 Feb 2021</Text>
            </View>
            <TouchableOpacity style={styles.closeButton}>
              <Image source={ImagePaths.close} style={{ width: 14, height: 14, resizeMode: 'contain' }} />
            </TouchableOpacity>
          </View>
          <View style={styles.calendarIcon}>
            <Image source={ImagePaths.calendar} style={styles.calendarImage} />
          </View>
        </View>
      </View>
      <ImageBackground source={ImagePaths.hashBg} style={styles.backgroundImage}>
        <FlatList
          bounces={false}
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          horizontal={false}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={{ width: 10, height: 10 }} />}
          style={styles.flatList}
        />
      </ImageBackground>
    </View>
  );
};

export default ViewReports;
