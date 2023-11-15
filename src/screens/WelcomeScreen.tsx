// HomeScreen.tsx

import React from 'react';
import { View, Text, SafeAreaView, Image, StyleSheet, Platform, TouchableOpacity, ScrollView } from 'react-native';
import { ImagePaths } from '../constant/images';
import { screenSize } from '../constant/screenSize';
import { fontFamily } from '../constant/fontFamily';
import RoundedButton from '../components/RoundedButton';

const WelcomeScreen: React.FC = () => {
  return (
    <ScrollView 
    bounces={false}
    showsVerticalScrollIndicator={false}
    style={{flex:1,backgroundColor:'#F7F6F8'}}>
    <Image 
    source={ImagePaths.signupLayout}
    style={{
      width:314,
      height:175,
      resizeMode:'stretch',
      alignSelf:'flex-end'
    }}
    ></Image>
    <Image 
    source={ImagePaths.logo}
    style={{
      width:160,
      height:52,
      position:'absolute',
      top:94,
      left:28
    }}
    ></Image>
    <View style={{
      marginHorizontal:30,
    }}>
      <Text style={{
        fontFamily:fontFamily.bold,
        fontSize:28,
        color:'#292929'
        }}>W<Text style={{
          fontFamily:fontFamily.light,
          fontSize:28,
          color:'#292929'
          }}>elcome</Text>
      </Text>
      <Text style={{
          fontFamily:fontFamily.regular,
          fontSize:15,
          color:'#292929',
          marginVertical:9,
          }}>Choose one of the below to get started
      </Text>
      <ScrollView>
      <RoundedButton
       onPress={()=>{}}
       buttonName='Mobile Number'
       imageUrl={ImagePaths.smartphone}
       labelStyle={styles.buttonText}
       iconStyle={styles.smartPhoneIcon}
       containerStyle={styles.mobileContainer}
       />
       <RoundedButton
       onPress={()=>{}}
       buttonName='Email Address'
       imageUrl={ImagePaths.email}
       containerStyle={styles.emailContainer}
       labelStyle={styles.buttonText}
       iconStyle={styles.emailIcon}/>
       <RoundedButton
       onPress={()=>{}}
       buttonName='Sign in with Google'
       imageUrl={ImagePaths.google}
       containerStyle={styles.googleContainer}
       labelStyle={styles.googleLabel}
       iconStyle={styles.ggogleIcon}/>
       <RoundedButton
       onPress={()=>{}}
       buttonName='Sign in with Facebook'
       imageUrl={ImagePaths.facebook}
       labelStyle={styles.facebookLabel}
       iconStyle={styles.facebookIcon}
       containerStyle={styles.facebookContainer}/>
       {!(Platform.OS=='ios')&&
       <RoundedButton
       onPress={()=>{}}
       buttonName='Sign in with Apple'
       imageUrl={ImagePaths.apple}
       labelStyle={styles.appleLabel}
       iconStyle={styles.appleIcon}
       containerStyle={styles.appleContainer}/>}
       </ScrollView>
       <TouchableOpacity style={{marginVertical:10}}>
        <Text style={{
          fontFamily:fontFamily.medium,
          fontSize:14,
          color:'#7D7D7D',
          textTransform:'uppercase',
          textAlign:'center'
        }}>Skip</Text>
       </TouchableOpacity>
       <Text style={{
          fontFamily:fontFamily.medium,
          fontSize:14,
          color:'#000000',
          textAlign:'center'
        }}>By continuing you agree to the</Text>
        <View style={{
          flexDirection:'row',alignItems:'center',
          justifyContent:'center',marginVertical:10}}>
          <TouchableOpacity>
            <Text style={{
          fontFamily:fontFamily.regular,
          fontSize:13,
          color:'#328AEE',
          textDecorationLine:'underline'
        }}>Terms & Conditions</Text>
          </TouchableOpacity>
          <Text style={{
          fontFamily:fontFamily.regular,
          fontSize:13,
          color:'#09182B',
          marginHorizontal:5
        }}>&</Text>
          <TouchableOpacity>
            <Text style={{
          fontFamily:fontFamily.regular,
          fontSize:13,
          color:'#328AEE',
          textDecorationLine:'underline'
        }}>Privacy Policy</Text>
          </TouchableOpacity>
        </View>
        <View style={{marginVertical:15}}>
          <Text  style={{
          fontFamily:fontFamily.regular,
          fontSize:11,
          color:'#000000',
          textAlign:'center'
        }}>
          Your privacy is respected and protected. All personal information is used for astrological calculations only.
          </Text>
        </View>
    </View>
    <Image 
    source={ImagePaths.bottomLayout}
    style={{
      width:171,
      height:51,
      resizeMode:'stretch',
      alignSelf:'center'
    }}
    ></Image>
    </ScrollView>
  );
};

export default WelcomeScreen;
const styles = StyleSheet.create({
  buttonText: {
    fontSize: 17,
    color: '#FFFFFF', 
    fontFamily:fontFamily.regular
  },
  googleLabel:{
    fontSize: 17,
    color: '#807E7E', 
    fontFamily:fontFamily.robotoMedium
  },
  facebookLabel:{
    fontSize: 17,
    color: '#FFFFFF', 
    fontFamily:fontFamily.robotoMedium
  },
  appleLabel:{
    fontSize: 17,
    color: '#000000', 
    fontFamily:fontFamily.medium
  },
  emailIcon:{
    width:17,
    height:13,
    position:'absolute',
    top:20,
    left:48,
  },
  smartPhoneIcon:{
    width:13,
    height:20,
    position:'absolute',
    top:17,
    left:48,
  },
  ggogleIcon:{
    width:19,
    height:19,
    position:'absolute',
    top:17,
    left:48,
  },
  facebookIcon:{
    width:18,
    height:18,
    position:'absolute',
    top:17,
    left:48,
  },
  appleIcon:{
    width:16,
    height:18,
    position:'absolute',
    top:17,
    left:48,
  },
  mobileContainer:{
    backgroundColor:'#B342F2'
  },
  emailContainer:{
    backgroundColor:'#328AEE'
  },
  googleContainer:{
    backgroundColor:'#FFFFFF',
    shadowColor: "#00000080",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  facebookContainer:{
    backgroundColor:'#4267B2'
  },
  appleContainer:{
    backgroundColor:'#FFFFFF',
    shadowColor: "#00000080",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  }
});
