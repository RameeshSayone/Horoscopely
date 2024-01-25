import React from 'react';
import { View, Text, TouchableOpacity, Modal, TouchableWithoutFeedback } from 'react-native';

import { FlatList, } from 'react-native';
import { screenSize } from '../../constant/screenSize';
import { fontFamily } from '../../constant/fontFamily';
interface CustomModalProps {
    isVisible: boolean;
    onClose: () => void;
    onClickItem:(item: string) => void;
    data:string[];
  }
const CustomPickerModal: React.FC<CustomModalProps> = ({ isVisible, onClose,onClickItem ,data}) => {
    const handleItemClick = (item: string) => {
      onClickItem(item);
      onClose();
    };
  
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={isVisible}
        onRequestClose={onClose}
      >
          <TouchableWithoutFeedback onPress={onClose}>
              <View style={{flex:1}} />
          </TouchableWithoutFeedback>
        <View style={{
          flex: 1,
          justifyContent: 'flex-end',
          }}>
          <View style={{
               backgroundColor: 'white', height: 0.5 * screenSize.height,
               borderTopStartRadius:10,
               borderTopEndRadius:10, }}>
            <FlatList
              data={data}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => handleItemClick(item)}
                  style={{
                    padding: 16,
                    borderBottomWidth: 1,
                    borderBottomColor: '#ccc',
                  }}
                >
                  <Text style={{
                      fontFamily:fontFamily.regular,
                      fontSize:15,
                      lineHeight:18,
                      color:'#545353',
                  }}>{item}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </Modal>
    );
  };

  export default CustomPickerModal;