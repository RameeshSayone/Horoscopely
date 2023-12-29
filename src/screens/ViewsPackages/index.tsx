

import React from "react";
import { ImageBackground, Image, Text, TouchableOpacity, View, FlatList, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ImagePaths } from "../../constant/images";
import { styles } from "./styles";
import PacakageSlider from "../../components/PackageSlider";

interface Card {
  id: number;
  description: string;
}

interface Props {
  data: Card[];
}

const ViewPackages: React.FC = () => {
  const navigation = useNavigation();
  const carouselData = [
    { title: 'Free 7 Days', type: 'Trial', price: '9.99' },
    { title: 'Free 7 Days', type: 'Trial', price: '9.99' },
    { title: 'Free 7 Days', type: 'Trial', price: '9.99' },
  ];
  const data = [
    { id: 1, description: 'Access to limited content only' },
    { id: 2, description: 'There will be ads' },
    { id: 3, description: 'Access to limited content only' },
    { id: 4, description: 'There will be ads' },
    { id: 5, description: 'Access to limited content only' },
  ];

  const renderItem = ({ item }: { item: Card }) => (
    <View style={styles.itemContainer}>
      <View style={styles.bullet} />
      <Text style={styles.itemText}>{item.description}</Text>
    </View>
  );

  return (
    <ImageBackground
      source={ImagePaths.hashBg}
      style={styles.container}
    >
      <ImageBackground
        source={ImagePaths.bottomTabBg}
        style={{ flex: 0.5 }}
        imageStyle={{
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20
        }}
      >
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={ImagePaths.arrow}
              style={{
                width: 18,
                height: 29,
                tintColor: '#FFFFFF',
              }}
            />
          </TouchableOpacity>
          <Text style={styles.headerText}>Packages</Text>
          <TouchableOpacity>
            <Image source={ImagePaths.share}
              style={{
                width: 19,
                height: 21,
                resizeMode: 'contain',
              }}
            />
          </TouchableOpacity>
        </View>
        <SafeAreaView style={{ flex: 1 }}>
        <PacakageSlider data={carouselData} />
      </SafeAreaView>
      </ImageBackground>
      <View style={{ flex: 0.5 }}>
        <View style={styles.featureContainer}>
          <Text style={styles.featureTitle}>Features</Text>
          <FlatList
            bounces={false}
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            horizontal={false}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => <View style={{ width: 10, height: 15 }} />}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

export default ViewPackages;
