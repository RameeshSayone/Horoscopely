import React from "react";
import { Image, SafeAreaView, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { ImagePaths } from "../../constant/images";
import { useNavigation } from "@react-navigation/native";
import LinearGradient from "react-native-linear-gradient";
import { styles } from "./styles";

const ErrorPage: React.FC = () => {
  const navigation = useNavigation();

  const onPressContinue = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent={false} backgroundColor={'grey'}/>
      <Image source={ImagePaths.error404} style={styles.errorImage} />
      <Text style={styles.pageTitle}>Page Not Found...</Text>
      <Text style={styles.pageDescription}>This page is unknown or does not exist.</Text>
      <TouchableOpacity style={styles.continueButtonContainer} onPress={onPressContinue}>
        <LinearGradient
          colors={['#32A0EE', '#9713C6']}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
          style={styles.linearGradient}
        >
          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <Text style={styles.buttonText}>{'Go to Home Page'}</Text>
          </View>
        </LinearGradient>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ErrorPage;