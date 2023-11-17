// Import necessary modules from React and React Native
import React from 'react';
import { View, ScrollView, Text, StyleSheet, Image } from 'react-native';
import { ImagePaths } from '../constant/images';
import { screenSize } from '../constant/screenSize';

// Define the MobileSignupScreen component
const MobileSignupScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
      <Image
        source={ImagePaths.hsLayout}
        style={styles.backgroundImage}
      />
      </View>

      <ScrollView
       bounces={false}
       showsVerticalScrollIndicator={false}
       style={styles.middleSection}>
        <Image
            source={ImagePaths.logo}
            style={styles.logoImage}
        />
       
      </ScrollView>

      {/* Bottom Section */}
      <View style={styles.bottomSection}>
      <Image
        source={ImagePaths.hsBottomLayout}
        style={styles.backgroundImage}
      />
      </View>
    </View>
  );
};

// Styles for the components
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor:'#FFFFFF'
  },
  topSection: {
    alignItems: 'center',
  },
  middleSection: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 30,
  },
  bottomSection: {
    alignItems: 'center',
    position:'absolute',
    bottom:0
  },
  backgroundImage:{
    width: screenSize.width,
    height:  screenSize.width*0.6,
    resizeMode: 'stretch',
    alignSelf: 'flex-end',
  },
  logoImage: {
    width: (screenSize.width-30)/2,
    height: 60,
  },
});


export default MobileSignupScreen;
