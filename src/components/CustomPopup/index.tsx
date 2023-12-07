import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
} from 'react-native';
import { styles } from './styles';

interface CustomPopupProps {
  isVisible: boolean;
  message: string;
  onCancel: () => void;
  title:string;
}

const CustomPopup: React.FC<CustomPopupProps> = ({ isVisible,title, message, onCancel }) => {
  return (
    <Modal transparent={true} animationType="slide" visible={isVisible}>
      <TouchableWithoutFeedback onPress={onCancel}>
        <View style={styles.overlay} />
      </TouchableWithoutFeedback>
      <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
        <Text style={styles.message}>{message}</Text>
        <TouchableOpacity style={styles.cancelButton} onPress={onCancel}>
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default CustomPopup;
