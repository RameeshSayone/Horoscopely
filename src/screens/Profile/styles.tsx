import { StyleSheet } from "react-native";
import { fontFamily } from "../../constant/fontFamily";
import { screenSize } from "../../constant/screenSize";

export const styles=StyleSheet.create({
    container: {
        width: '33%',
        justifyContent: 'center',
        alignItems: 'center',
      },
      image: {
        width: 18,
        height: 18,
        resizeMode: 'contain',
      },
      typeText: {
        fontFamily: fontFamily.regular,
        fontSize: 11,
        lineHeight: 13,
        color: '#95C8FF',
        marginVertical: 8,
      },
      nameText: {
        fontFamily: fontFamily.medium,
        fontSize: 12,
        lineHeight: 14,
        color: '#FFFFFF',
      },
      listContainer: {
        marginBottom: 15,
      },
      label: {
        fontFamily: fontFamily.bold,
        fontSize: 12,
        lineHeight: 14,
        color: '#545353',
        marginBottom: 10,
      },
      verifyButton: {
        position: 'absolute',
        right: 5,
      },
      verifyText: {
        fontFamily: fontFamily.medium,
        fontSize: 12,
        lineHeight: 14,
        color: '#007AFF',
      },
      valueContainer: {
        borderBottomColor: '#54535350',
        paddingBottom: 10,
      },
      value: {
        fontFamily: fontFamily.regular,
        fontSize: 15,
        lineHeight: 18,
        color: '#545353',
      },
      mainContainer: {
        flex: 1,
      },
      topSection: {
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      },
      versionBg: {
        flex: 1,
        top: -5,
      },
      imageStyle:{
        borderRadius:20
      },
      profilePicContainer: {
        height:113,
        width:113,
        backgroundColor:'#FFFFFFD9',
        borderRadius:100,
        borderWidth:2,
        borderColor:'#FFFFFF',
        justifyContent:'center',
        alignItems:'center',
        position:'absolute',
        top:0,
        left:(screenSize.width/2)-56,
        zIndex:1
      },
      profilePic: {
        height: 77,
        width: 89,
      },
      linearGradient: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        marginTop: 56,
      },
      linearGradientText: {
        fontFamily: fontFamily.medium,
        fontSize: 17,
        lineHeight: 20,
        color: '#FFFFFF',
        marginTop: 56,
      },
      linearGradientSubText: {
        fontFamily: fontFamily.regular,
        fontSize: 13,
        lineHeight: 15,
        color: '#FFFFFF',
        marginTop: 10,
      },
      flatListContainer: {
        margin: 25,
      },
      ItemSeparatorComponent:{
        width:10,
        height:30
      },
      showMoreButton: {
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
      },
      showMoreText: {
        fontFamily: fontFamily.regular,
        fontSize: 13,
        lineHeight: 15,
        color: '#FFFFFF',
      },
      showMoreArrow: {
        width: 15,
        height: 15,
        resizeMode: 'contain',
        marginLeft: 5,
        tintColor: '#FFFFFF',
        transform: [{ rotate: '-90deg' }],
      },
      basicDetailsContainer: {
        padding: 25,
      },
      detailsRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 25,
      },
      detailsRowTitle: {
        fontFamily: fontFamily.bold,
        fontSize: 15,
        lineHeight: 18,
        color: '#09182B',
      },
      editButton: {
        fontFamily: fontFamily.medium,
        fontSize: 13,
        lineHeight: 15,
        color: '#007AFF',
      },
      scrollViewContainer: {
        marginBottom: 10,
      },
      inputContainer: {
        marginBottom: 15,
      },
      inputLabel: {
        fontFamily: fontFamily.bold,
        fontSize: 12,
        lineHeight: 14,
        color: '#545353',
        marginBottom: 10,
      },
      textBox: {
        borderWidth: 0.5,
        borderColor: '#AFAFAF',
        borderRadius: 3,
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        fontFamily: fontFamily.regular,
        color: '#545353',
        lineHeight: 18,
        fontSize: 15,
      },
})