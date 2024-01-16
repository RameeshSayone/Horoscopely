import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { ImagePaths } from "../../constant/images";
import { styles } from "./styles";
interface CustomPopupProps {
    title:string;
  }

const Header:React.FC<CustomPopupProps>=({title})=>{
    const navigation = useNavigation();
    return(
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
          <Text style={styles.headerText}>{title}</Text>
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
    )
}
export default Header;