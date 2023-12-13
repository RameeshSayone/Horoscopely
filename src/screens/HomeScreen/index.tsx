import React, { useState } from 'react';
import {
  View,
  Text,
  ImageBackground,
  StatusBar,
  Image,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { ImagePaths } from '../../constant/images';
import LinearGradient from 'react-native-linear-gradient';
import RingChart from '../../components/RingChart';
import DayPicker from '../../components/DayPicker';
import { screenSize } from '../../constant/screenSize';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../interfaces/common';
import screenName from '../../constant/screenName';

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<RootStackParamList>();
  const options = ['Today', 'Tomorrow', 'Yesterday'];
  const [isDropdownVisible, setDropdownVisibility] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisibility(!isDropdownVisible);
  };

  return (
    <ImageBackground source={ImagePaths.bottomTabBg} style={styles.background}>
      <StatusBar translucent={true} backgroundColor={'transparent'} />
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        style={styles.container}
      >
        <SafeAreaView>
          <View style={styles.logContainer}>
            <Image source={ImagePaths.logo} style={styles.logo} />
            <View style={styles.notificationSec}>
              <TouchableOpacity onPress={()=>{navigation.navigate(screenName.NOTIFICATION)}}>
                <Image source={ImagePaths.bell} style={styles.bell} />
              </TouchableOpacity>
              <View style={styles.badgeSec}>
                <Text style={styles.badgeCount}>3</Text>
              </View>
            </View>
          </View>
          <LinearGradient
            colors={['#9713C6', '#32A0EE']}
            useAngle={true}
            angle={315}
            angleCenter={{ x: 0.5, y: 0.5 }}
            style={styles.linearGradient}
          >
            <Text style={styles.name}>Hello, Harper</Text>
            <View style={styles.subSec}>
              <Text style={styles.subtext}>January 1, 1989 . 09:20 PM</Text>
              <Image source={ImagePaths.aries} style={styles.aries} />
            </View>
            <View style={styles.chartRow}>
              <RingChart data={[85]} labels={['Love']} labelColor='#FFFFFF' chartColor='rgba(132, 202, 255, 0.4)' />
              <RingChart data={[67]} labels={['Career']} labelColor='#FFFFFF' chartColor='rgba(132, 202, 255, 0.4)' />
              <RingChart data={[49]} labels={['Health']} labelColor='#FFFFFF' chartColor='rgba(132, 202, 255, 0.4)' />
            </View>
            <View style={styles.eventSec}>
              <View style={styles.calendarSec}>
                <Text style={styles.calendarText}>
                  Your Calendar Advice of the Day
                </Text>
                <View style={styles.calendarSubsec}>
                  <Image
                    source={ImagePaths.calendar}
                    style={styles.calendarIcon}
                  />
                  <Image
                    source={ImagePaths.downArrow}
                    style={styles.downArrow}
                  />
                </View>
              </View>
              <View style={styles.focusContainer}>
                <Text style={styles.focusText}>Your Focus of the Day</Text>
                <View style={styles.focusIconSec}>
                  <Image source={ImagePaths.sun} style={styles.sun} />
                  <Image
                    source={ImagePaths.downArrow}
                    style={styles.focusArrow}
                  />
                </View>
              </View>
            </View>
          </LinearGradient>
          <View style={styles.horoscopeSec}>
            <Text style={styles.horoscopeText}>Your Horoscope of the Day</Text>
            <View style={styles.datePickSec}>
              <View style={styles.datePickSubSec}>
                <Image source={ImagePaths.share} style={styles.share} />
                <Image
                  source={ImagePaths.calendar}
                  style={styles.dateCalendar}
                />
              </View>
              <View style={styles.dayPickerContainer}>
                <DayPicker
                  options={options}
                  isDropdownVisible={isDropdownVisible}
                  toggleDropdown={toggleDropdown}
                />
              </View>
            </View>
            <Text
              style={[
                styles.description,
                {
                  width: isDropdownVisible
                    ? screenSize.width - 182
                    : screenSize.width - 60,
                },
              ]}
            >
              Adopting a healthy lifestyle is on the cards and will lead you to
              total fitness. Chance for setting out on a pilgrimage may
              materialize. High rentals may discourage some from shifting
              residence to someplace decent. An outstanding payment is likely to
              be received soon and add to your wealth. Your eye for detail and
              willingness to put in extra hours at work will be richly rewarded
              on the professional front.
            </Text>
          </View>
        </SafeAreaView>
      </ScrollView>
    </ImageBackground>
  );
};

export default HomeScreen;
