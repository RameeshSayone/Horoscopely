import React from 'react';
import {
  Image,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import { ImagePaths } from '../../constant/images';
import { SAMPLE_TEXT } from '../../constant/dummyData';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';

const IosVerification: React.FC = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent={false} backgroundColor={'grey'}/>
      <View style={styles.imageContainer}>
        <Image source={ImagePaths.iosVerify} style={styles.iosImage} />
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Date of Birth</Text>
          <Text numberOfLines={2} style={styles.sectionText}>
            {SAMPLE_TEXT}
          </Text>
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Time of Birth</Text>
          <Text numberOfLines={2} style={styles.sectionText}>
            {SAMPLE_TEXT}
          </Text>
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Place of Birth</Text>
          <Text numberOfLines={2} style={styles.sectionText}>
            {SAMPLE_TEXT}
          </Text>
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Birth Gender</Text>
          <Text numberOfLines={2} style={styles.sectionText}>
            {SAMPLE_TEXT}
          </Text>
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Relationship Status</Text>
          <Text numberOfLines={2} style={styles.sectionText}>
            {SAMPLE_TEXT}
          </Text>
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Got it</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default IosVerification;
