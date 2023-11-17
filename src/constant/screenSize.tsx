import { Dimensions } from "react-native";

export enum screenSize{
    width=Dimensions.get('screen').width,
    height=Dimensions.get('screen').height
}