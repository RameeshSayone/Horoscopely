
import React from "react";
import { ImagePaths } from "../../constant/images";
import { Image, ImageBackground, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { fontFamily } from "../../constant/fontFamily";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../interfaces/common";
import screenName from "../../constant/screenName";
import { styles } from "./styles";

const FocusOfTheDay: React.FC = () => {
  const navigation = useNavigation<RootStackParamList>();

  return (
    <ImageBackground source={ImagePaths.bottomTabBg} style={styles.container}>
      <View style={styles.headerContainer}>
        <Image source={ImagePaths.aries} style={styles.zodiacImage} />
        <Text style={styles.headerText}>{"Your Focus of the day"}</Text>
        <Image source={ImagePaths.share} style={styles.shareImage} />
      </View>
      <ScrollView style={styles.scrollView} bounces={false} showsVerticalScrollIndicator={false}>
        <Text style={styles.paragraphText}>
          {"The way to universal love is self love! Be compassionate toward yourself and others. It's a single key, perpetually unlocking innumerable hearts. Forgiveness comes naturally to those who practice compassion. It's an artist's best color, the best music, the best poem! Forgiving others will enable you to deal with your situations and problems more gracefully."}
        </Text>
        <Text style={styles.paragraphText}>
          {"Expect unexpected, but simultaneously also be aware of deceptions. Sudden events out of the blue with a tinge of some unexpected news may surprise you! Good or bad, always make a sincere attempt at taking things in your stride. A tight rope walker knows no better way! Legal matters and computer foul ups might pull you down further, but again, only psychic balance shall help you sail through. Happiness does not need a concrete door! It's a fluid taking the shape of the vessel. Hence, be the vessel wherein, it would want to flow in naturally. Insights would make their way to you this day. They are the language of heart. Thus, listen to them, they might be singing the tune you like!"}
        </Text>
      </ScrollView>
      <View style={styles.actionContainer}>
        <TouchableOpacity onPress={() => navigation.navigate(screenName.CALENDAR_ADVICE)}>
          <Image source={ImagePaths.cross} style={styles.crossImage} />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default FocusOfTheDay;
