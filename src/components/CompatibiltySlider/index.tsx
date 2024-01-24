

import React, { useRef } from 'react';
import { View, Text, Dimensions, Image, TouchableOpacity, ImageSourcePropType } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import LinearGradient from 'react-native-linear-gradient';
import { ImagePaths } from '../../constant/images';
import { styles } from './styles';

const { width: screenWidth } = Dimensions.get('window');

interface CarouselItem {
  name: string;
  name1: string;
  date: string;
  date1: string;
  logo: ImageSourcePropType;
  logo1: ImageSourcePropType;
}

interface CarouselSliderProps {
  data: CarouselItem[];
}

const CompatibiltySlider: React.FC<CarouselSliderProps> = ({ data }) => {
  const [activeIndex, setActiveIndex] = React.useState(1);
  const carouselRef = useRef<Carousel<CarouselItem>>(null);

  const onSnapToItem = (index: number) => {
    setActiveIndex(index);
  };

  const renderItem = ({ item, index }: { item: CarouselItem; index: number }) => {
    const isActive = index === activeIndex;

    return (
      <View
        style={[styles.carouselItem, isActive && styles.activeItemBackground]}
      >
        <View>
          <View style={styles.logoContainer}>
            <LinearGradient
              colors={['#32A0EE', '#74DCF6']}
              useAngle={true}
              angle={221}
              style={styles.logoGradient}
            >
              <Image source={item.logo} style={styles.logoImage} />
              {index == 1 && (
                <View style={styles.youBadge}>
                  <Text style={styles.youBadgeText}>You</Text>
                </View>
              )}
            </LinearGradient>
          </View>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemDate}>{item.date}</Text>
        </View>
        <View style={styles.secondItemContainer}>
          <View style={styles.logoContainer}>
            <LinearGradient
              colors={['#32A0EE', '#74DCF6']}
              useAngle={true}
              angle={221}
              style={styles.logoGradient}
            >
              <Image source={item.logo1} style={styles.logoImage} />
            </LinearGradient>
          </View>
          <Text style={styles.itemName}>{item.name1}</Text>
          <Text style={styles.itemDate}>{item.date1}</Text>
        </View>
      </View>
    );
  };

  const moveCarousel = (direction: 'next' | 'prev') => {
    if (direction === 'next') {
      carouselRef.current?.snapToNext();
    } else {
      carouselRef.current?.snapToPrev();
    }
  };

  return (
    <View style={styles.container}>
      <Carousel
        ref={carouselRef}
        data={data}
        renderItem={renderItem}
        sliderWidth={screenWidth}
        itemWidth={screenWidth / 2}
        layout={'default'}
        loop={false}
        onSnapToItem={onSnapToItem}
        initialNumToRender={data?.length}
        loopClonesPerSide={data?.length}
        inactiveSlideOpacity={0.7}
        removeClippedSubviews={false}
        firstItem={1}
      />
      {activeIndex !== 0 && (
        <TouchableOpacity
          onPress={() => {
            moveCarousel('prev');
          }}
          style={[
            styles.arrowButton,
            styles.leftArrowButton,
          ]}
        >
          <Image 
          source={ImagePaths.blueArrow}
          style={[styles.arrowIcon,{transform: [{ rotate: '180deg' }] }]}
          />
        </TouchableOpacity>
      )}
      {activeIndex !== data?.length - 1 && (
        <TouchableOpacity
          onPress={() => {
            moveCarousel('next');
          }}
          style={[
            styles.arrowButton,
            styles.rightArrowButton,
          ]}
        >
          <Image source={ImagePaths.blueArrow} style={styles.arrowIcon} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CompatibiltySlider;
