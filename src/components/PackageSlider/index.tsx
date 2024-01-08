import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import LinearGradient from 'react-native-linear-gradient';
import { styles } from './styles';

const { width: screenWidth } = Dimensions.get('window');

interface CarouselItem {
  title: string;
  type: string;
  price: string;
}

interface CarouselSliderProps {
  data: CarouselItem[];
}

const PacakageSlider: React.FC<CarouselSliderProps> = ({ data }) => {
  const [activeIndex, setActiveIndex] = React.useState(1);

  const onSnapToItem = (index: number) => {
    setActiveIndex(index);
  };

  const renderItem = ({ item, index }: { item: CarouselItem; index: number }) => {
    return (
      <View style={styles.carouselItem}>
        <View style={styles.contentContainer}>
          <Text style={styles.titleText}>{item.title}</Text>
          <Text style={styles.typeText}>{item.type}</Text>
        </View>
        <LinearGradient
          colors={['#2272FC', '#4BE1DCFC']}
          useAngle={true}
          angle={133}
          style={styles.linearGradient}
        >
          <View style={styles.overlayLine} />
          <Text style={styles.overlayText}>After that</Text>
          <Text style={styles.priceText}>{`$${item.price} Weekly`}</Text>
          <View style={styles.planContainer}>
            <Text style={styles.planText}>Current plan</Text>
          </View>
        </LinearGradient>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Carousel
        data={data}
        renderItem={renderItem}
        sliderWidth={screenWidth}
        itemWidth={screenWidth - 120}
        layout={'default'}
        loop
        onSnapToItem={onSnapToItem}
        initialNumToRender={data?.length}
        loopClonesPerSide={data?.length}
        inactiveSlideOpacity={0.7}
        removeClippedSubviews={false}
      />
    </View>
  );
};



export default PacakageSlider;
