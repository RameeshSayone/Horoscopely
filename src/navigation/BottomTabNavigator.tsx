import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import CompatibilityScreen from '../screens/Compatibilty';
import RemediesScreen from '../screens/Remedies';
import MoreScreen from '../screens/More';
import { Image, Platform, StyleSheet } from 'react-native';
import { ImagePaths } from '../constant/images';
import { fontFamily } from '../constant/fontFamily';

const Tab = createBottomTabNavigator();

const BottomTabNavigator= () => {
  return (
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown:false,
          tabBarStyle: { 
            height: Platform.OS=='ios'?100: 83,
            backgroundColor:'#521061'
            },
          tabBarActiveTintColor: '#D04EFF',
          tabBarInactiveTintColor: '#B78EC5',
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarLabelStyle:styles.tabBarLabelStyle,
            tabBarIcon: ({ color, size }) => (
              <Image source={ImagePaths.home} style={{ width: size, height: size, tintColor: color }} />
            ),
          }}
        />
        <Tab.Screen
          name="Compatibility"
          component={CompatibilityScreen}
          options={{
            tabBarLabel: 'Compatibility',
            tabBarLabelStyle:styles.tabBarLabelStyle,
            tabBarIcon: ({ color, size }) => (
              <Image source={ImagePaths.compatibility} style={{ width: size, height: size, tintColor: color }} />
            ),
          }}
        />
        <Tab.Screen
          name="Remedies"
          component={RemediesScreen}
          options={{
            tabBarLabel: 'Remedies',
            tabBarLabelStyle:styles.tabBarLabelStyle,
            tabBarIcon: ({ color, size }) => (
              <Image source={ImagePaths.remedies} style={{ width: size, height: size, tintColor: color }} />
            ),
          }}
        />
        <Tab.Screen
          name="More"
          component={MoreScreen}
          options={{
            tabBarLabel: 'More',
            tabBarLabelStyle:styles.tabBarLabelStyle,
            tabBarIcon: ({ color, size }) => (
              <Image source={ImagePaths.more} style={{ width: size, height: size, tintColor: color }} />
            ),
          }}
        />
      </Tab.Navigator>
  );
};

export default BottomTabNavigator;

const styles=StyleSheet.create({
  tabBarLabelStyle:{
    fontFamily:fontFamily.bold,
    fontSize:10,
    lineHeight:12,
    letterSpacing:-0.24,
    bottom:Platform.OS=='ios'?10: 18,
    textTransform:'uppercase'
    },
})
