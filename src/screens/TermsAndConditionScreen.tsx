import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Image, ScrollView } from 'react-native';
import { fontFamily } from '../constant/fontFamily';
import { ImagePaths } from '../constant/images';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../interfaces/common';


const TermsAndConditionScreen: React.FC= () => {
  const navigation = useNavigation<RootStackParamList>();
  const onClose = (): void => {
    navigation.goBack();
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Terms and Conditions</Text>
        <TouchableOpacity onPress={()=>{onClose()}} style={styles.closeButton}>
          <Image
            source={ImagePaths.close}
            style={styles.closeIcon}
          />
        </TouchableOpacity>
      </View>
      <ScrollView 
      style={styles.content}
      bounces={false}
      showsVerticalScrollIndicator={false}>
        <Text style={styles.paragraph}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada ullamcorper lorem, in tempor lectus accumsan sed. Pellentesque dictum nunc a viverra placerat. Fusce eget luctus est, nec aliquam neque. Maecenas nec magna velit. Donec sollicitudin ex sit amet magna lobortis feugiat. Phasellus interdum porta pulvinar. Proin in arcu libero. Nunc consequat, metus at scelerisque sollicitudin, arcu ipsum blandit ante, vel consequat urna lectus non enim. Fusce feugiat felis felis, non sollicitudin magna aliquet non. Proin eget eleifend libero. Quisque et ex suscipit, faucibus ante eget, dictum lorem. Sed a gravida lectus. Praesent et enim laoreet, laoreet massa ut, commodo risus. Vivamus eget vehicula dui. Aliquam a ipsum mi. Pellentesque semper id sem vel sollicitudin. Morbi vitae nunc tellus. Suspendisse hendrerit nibh eu commodo tristique. Vestibulum rhoncus malesuada est nec gravida. Morbi aliquet nunc sagittis luctus rutrum. Ut orci eros, sollicitudin id leo sit amet, feugiat molestie arcu.        </Text>
        <Text style={styles.paragraph}>
        Sed eget aliquet ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada ullamcorper lorem, in tempor lectus accumsan sed. Pellentesque dictum nunc a viverra placerat. Fusce eget luctus est, nec aliquam neque. Maecenas nec magna velit. Donec sollicitudin ex sit amet magna lobortis feugiat. Phasellus interdum porta pulvinar. Proin in arcu libero. Nunc consequat,
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#FFFFFF'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding:20,
    backgroundColor:'#F2F2F2'
  },
  headerText: {
    fontSize: 15,
    fontFamily: fontFamily.bold,
    color:'#0D0D0D'
  },
  closeButton: {
    padding: 10,
    position:'absolute',
    right:20
  },
  closeIcon: {
    width:15,
    height:15
  },
  content: {
    padding:30,
    paddingBottom:60
  },
  paragraph: {
    fontSize: 13,
    lineHeight: 21,
    color:'#2A2A2A',
    marginBottom:30
  },
});

export default TermsAndConditionScreen;
