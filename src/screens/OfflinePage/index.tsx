import React from "react";
import { Image, SafeAreaView, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { ImagePaths } from "../../constant/images";
import { useNavigation } from "@react-navigation/native";
import LinearGradient from "react-native-linear-gradient";
import { styles } from "./styles";

const OfflinePage: React.FC = () => {
  const navigation = useNavigation();

  const onClose = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent={false} backgroundColor={'grey'}/>
      <TouchableOpacity onPress={()=>{onClose()}} style={styles.closeButton}>
          <Image
            source={ImagePaths.close}
            style={styles.closeIcon}
          />
        </TouchableOpacity>
      <Image source={ImagePaths.offline} style={styles.errorImage} />
      <Text style={styles.pageTitle}>Something went wrong....</Text>
      <Text style={styles.pageDescription}>{'Check your internet connection or,'}</Text>
      <Text style={[styles.pageDescription,{marginTop:0}]}>{'Please try again.'}</Text>
    </SafeAreaView>
  );
};

export default OfflinePage;