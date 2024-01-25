import React, { useState } from 'react';
import { Text, ImageBackground, TouchableOpacity, View, Image, ScrollView } from 'react-native';
import { ImagePaths } from '../../constant/images';
import Header from '../../components/HeaderComponent';
import { fontFamily } from '../../constant/fontFamily';
import LinearGradient from 'react-native-linear-gradient';
import ProgressBar from '../../components/ProgressBar';
import { COMPATIBILTY_DETAIL, SAMPLE_TEXT } from '../../constant/dummyData';
import { styles } from './styles';

const Compatibilty: React.FC = () => {
  const FRIENDSHIP = 'Friendship';
  const DESTINY = 'Destiny';
  const ROMANCE = 'Romance';
  const [activeTab, setActiveTab] = useState(FRIENDSHIP);

  const onChangeTab = (name: string) => {
    setActiveTab(name);
  };

  return (
    <ImageBackground source={ImagePaths.bottomTabBg} style={styles.mainSec}>
      <Header title='Compatibility' />
      <ScrollView nestedScrollEnabled showsVerticalScrollIndicator={false} bounces={false} style={styles.mainView}>
        <View style={styles.rowContainer}>
          <View>
            <View style={styles.logoContainer}>
              <LinearGradient
                colors={['#32A0EE', '#74DCF6']}
                useAngle={true}
                angle={221}
                style={styles.logoGradient}
              >
                <Image source={ImagePaths.ariesSlider} style={styles.logoImage} />
                <View style={styles.youBadge}>
                  <Text style={styles.youBadgeText}>You</Text>
                </View>
              </LinearGradient>
            </View>
            <Text style={styles.itemName}>{'Capricorn'}</Text>
            <Text style={styles.itemDate}>{'Mar 22 - Apr 19'}</Text>
          </View>
          <Text style={styles.plusSign}>+</Text>
          <View>
            <View style={styles.logoContainer}>
              <LinearGradient
                colors={['#32A0EE', '#74DCF6']}
                useAngle={true}
                angle={221}
                style={styles.logoGradient}
              >
                <Image source={ImagePaths.scorpionSlider} style={styles.logoImage} />
              </LinearGradient>
            </View>
            <Text style={styles.itemName}>{'Aquarius'}</Text>
            <Text style={styles.itemDate}>{'Dec 22 - Jan 19'}</Text>
          </View>
        </View>
        <View style={styles.overallContainer}>
          <Text style={styles.overallLabel}>Overall</Text>
          <ProgressBar progress={0.5} />
        </View>
        <Text style={styles.description}>{COMPATIBILTY_DETAIL}</Text>
        <LinearGradient colors={['#32A0EE', '#9713C6']} useAngle={true} angle={133} style={styles.linearGradient}>
          <View style={styles.tabRow}>
            <TouchableOpacity onPress={() => onChangeTab(FRIENDSHIP)} style={styles.tabButton}>
              <Text
                style={[
                  styles.tabText,
                  {
                    fontFamily: activeTab == FRIENDSHIP ? fontFamily.bold : fontFamily.medium,
                  },
                ]}
              >
                Friendship
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => onChangeTab(DESTINY)}
              style={[styles.tabButton, { alignItems: 'center', marginHorizontal: 10 }]}
            >
              <Text
                style={[
                  styles.tabText,
                  {
                    fontFamily: activeTab == DESTINY ? fontFamily.bold : fontFamily.medium,
                  },
                ]}
              >
                Destiny
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => onChangeTab(ROMANCE)}
              style={[styles.tabButton, { alignItems: 'flex-end' }]}
            >
              <Text
                style={[
                  styles.tabText,
                  {
                    fontFamily: activeTab == ROMANCE ? fontFamily.bold : fontFamily.medium,
                  },
                ]}
              >
                Romance
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.tabRow}>
            <TouchableOpacity
              onPress={() => onChangeTab(FRIENDSHIP)}
              style={[
                styles.activeUnderline,
                {
                  backgroundColor: activeTab == FRIENDSHIP ? '#FFFFFF' : '#08407E40',
                  height: activeTab == FRIENDSHIP ? 4 : 1,
                },
              ]}
              activeOpacity={1}
            />
            <TouchableOpacity
              onPress={() => onChangeTab(DESTINY)}
              style={[
                styles.activeUnderline,
                {
                  backgroundColor: activeTab == DESTINY ? '#FFFFFF' : '#08407E40',
                  height: activeTab == DESTINY ? 4 : 1,
                },
              ]}
              activeOpacity={1}
            />
            <TouchableOpacity
              onPress={() => onChangeTab(ROMANCE)}
              style={[
                styles.activeUnderline,
                {
                  backgroundColor: activeTab == ROMANCE ? '#FFFFFF' : '#08407E40',
                  height: activeTab == ROMANCE ? 4 : 1,
                },
              ]}
              activeOpacity={1}
            />
          </View>
          <ScrollView nestedScrollEnabled showsVerticalScrollIndicator={false} bounces={false}>
            <Text style={styles.tabContentText}>{SAMPLE_TEXT}</Text>
          </ScrollView>
        </LinearGradient>
      </ScrollView>
    </ImageBackground>
  );
};

export default Compatibilty;
