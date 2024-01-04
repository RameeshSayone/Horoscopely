import React from 'react';
import { View, Modal, Text, TouchableOpacity, ScrollView, StyleSheet, Image, Platform, FlatList } from 'react-native';
import { ImagePaths } from '../../constant/images';
import { fontFamily } from '../../constant/fontFamily';

interface ModalProps {
  isVisible: boolean;
  closeModal: () => void;
}
interface Card {
    id: number;
    description: string;
}
  
interface Props {
   data: Card[];
}
  
const data = [
    { id: 1, description: 'Lorem ipsum dolor sit ametr' },
    { id: 2, description: 'Lorem ipsum dolor sit' },
    { id: 3, description: 'Lorem ipsum dolor sit ametr' },
    { id: 4, description: 'Lorem ipsum dolor sit amet, consect' },
    { id: 5, description: 'Lorem ipsum dolor' },
  ];
const SubscriptionAdModal: React.FC<ModalProps> = ({ isVisible, closeModal }) => {
    const renderItem = ({ item }: { item: Card }) => (
        <View style={styles.itemContainer}>
          <View style={styles.bullet} />
          <Text style={styles.itemText}>{item.description}</Text>
        </View>
      );
  return (
    <Modal transparent={true} visible={isVisible} animationType="slide">
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
          <Image
            source={ImagePaths.close}
            style={styles.closeIcon}
          />
          </TouchableOpacity>
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            <Text style={{
                 fontFamily: fontFamily.bold,
                 fontSize: 16,
                 lineHeight: 19,
                 color: '#74F6FF',
                 marginTop: 70,
                 textAlign:'center'
            }}>Here is what you will get</Text>
            <View style={{
                borderRadius:12,
                borderWidth:1.5,
                borderColor:'#FFFFFF',
                padding:25,
                marginVertical:20
            }}>
            <FlatList
            bounces={false}
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            horizontal={false}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => <View style={{ width: 10, height: 15 }} />}
          />
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '90%',
    height:Platform.OS=='ios'?'85%': '90%',
    backgroundColor: '#52198BFC',
    borderRadius: 14,
    padding: 10,
    position: 'relative',
    justifyContent:'center',
    alignItems:'center'
  },
  closeButton: {
    position: 'absolute',
    top: 25,
    right: 25,
    zIndex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  closeIcon: {
    width:15,
    height:15,
    tintColor:'#FFFFFF'
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bullet: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    width: 5,
    height: 5,
    marginRight: 15,
  },
  itemText: {
    fontFamily: fontFamily.regular,
    fontSize: 13,
    lineHeight: 15,
    color: '#FFFFFF',
  },
});

export default SubscriptionAdModal;
