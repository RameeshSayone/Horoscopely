import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, ImageBackground, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { ImagePaths } from '../../constant/images';
import { StatusBar } from 'react-native';
import RingChart from '../../components/RingChart';
import { styles } from './styles'; 

const ViewReportsDetails: React.FC = () => {
  const navigation = useNavigation();
  return (
    <ImageBackground source={ImagePaths.bottomTabBg} style={styles.container}>
      <StatusBar translucent={true} backgroundColor={'transparent'} />
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={ImagePaths.arrow} style={styles.arrowIcon} />
        </TouchableOpacity>
        <Text style={styles.titleText}>Horoscope Detail</Text>
        <TouchableOpacity>
          <Image source={ImagePaths.share} style={styles.shareIcon} />
        </TouchableOpacity>
      </View>
      <ImageBackground source={ImagePaths.hashBg} style={styles.background} imageStyle={styles.backgroundImg}>
        <ScrollView bounces={false} showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 10 }}>
          <Text style={styles.horoscopeText}>Horoscope</Text>
          <View style={styles.ringChartContainer}>
            <RingChart data={[85]} labels={['Love']} labelColor='#101010' chartColor='rgba(0, 123, 255, 0.4)' />
            <RingChart data={[67]} labels={['Career']} labelColor='#101010' chartColor='rgba(0, 123, 255, 0.4)' />
            <RingChart data={[49]} labels={['Health']} labelColor='#101010' chartColor='rgba(0, 123, 255, 0.4)' />
          </View>
          <View>
            <Text style={styles.horoscopeDetailText}>
              Adopting a healthy lifestyle is on the cards and will lead you to total fitness. Chance for setting out on a pilgrimage may materialize.
              High rentals may discourage some from shifting residence to someplace decent. An outstanding payment is likely to be received soon and add
              to your wealth. Your eye for detail and willingness to put in extra hours at work will be richly rewarded on the professional front.
            </Text>
            <Text style={styles.horoscopeDetailText}>
              Chance for setting out on a pilgrimage may materialize. High rentals may discourage some from shifting residence to someplace decent. An
              outstanding payment is likely to be received soon and add to your wealth. Your eye for detail and willingness to put in extra hours at
              work will be richly rewarded on the professional front.
            </Text>
          </View>
        </ScrollView>
      </ImageBackground>
    </ImageBackground>
  );
};

export default ViewReportsDetails;
