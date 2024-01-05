import React, { useState } from 'react';
import { View, Modal, Text, TouchableOpacity, ScrollView, Image, Platform, FlatList } from 'react-native';
import { ImagePaths } from '../../constant/images';
import { fontFamily } from '../../constant/fontFamily';
import LinearGradient from 'react-native-linear-gradient';
import SwitchToggle from 'react-native-switch-toggle';
import { styles } from './styles';

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
  const [isMonthlyPlan, setIsMonthlyPlan] = useState(true);
  const [isYearlyPlan, setIsYearlyPlan] = useState(false);
  const [isToggle, setIsToggle] = useState(false);

  const onClickMonthlyPlan = () => {
    setIsMonthlyPlan(!isMonthlyPlan);
    if (isYearlyPlan == true) {
      setIsYearlyPlan(false);
    }
  };

  const onClickYearlyPlan = () => {
    setIsYearlyPlan(!isYearlyPlan);
    if (isMonthlyPlan == true) {
      setIsMonthlyPlan(false);
    }
  };

  const onTogglePress = () => {
    setIsToggle(!isToggle);
  };

  const onPressContinue = () => {
    closeModal();
  };

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
            <Image source={ImagePaths.close} style={styles.closeIcon} />
          </TouchableOpacity>
          <Text style={styles.subscriptionText}>Here is what you will get</Text>
          <ScrollView contentContainerStyle={styles.scrollContainer} bounces={false} showsVerticalScrollIndicator={false}>
            <View style={styles.planContainer}>
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
            <TouchableOpacity onPress={onClickYearlyPlan}>
              <LinearGradient
                colors={isYearlyPlan ? ['#2272FCFC', '#4BE1DCFC'] : ['#00000010', '#00000010']}
                useAngle={true}
                angle={109}
                style={styles.linearGradient}
              >
                <View>
                  <Text style={styles.subscriptionPrice}>
                    <Text style={styles.subscriptionPrice}>$49.99</Text>/yearly ($4.17/month)
                  </Text>
                  <Text style={styles.cancelText}>Cancel Anytime</Text>
                </View>
                <View>{isYearlyPlan && <Image source={ImagePaths.tick} style={{ width: 17, height: 17, resizeMode: 'contain' }} />}</View>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity onPress={onClickMonthlyPlan}>
              <LinearGradient
                colors={isMonthlyPlan ? ['#2272FCFC', '#4BE1DCFC'] : ['#00000010', '#00000010']}
                useAngle={true}
                angle={109}
                style={styles.linearGradient}
              >
                <View>
                  <Text style={styles.subscriptionPrice}>
                    <Text style={styles.subscriptionPrice}>$11.99</Text>/monthly
                  </Text>
                  <Text style={styles.cancelText}>Cancel Anytime</Text>
                </View>
                <View>{isMonthlyPlan && <Image source={ImagePaths.tick} style={{ width: 17, height: 17, resizeMode: 'contain' }} />}</View>
              </LinearGradient>
            </TouchableOpacity>
          </ScrollView>
          <View style={styles.toggleContainer}>
            <Text style={styles.toggleText}>Not Sure yet? Enable free trail.</Text>
            <SwitchToggle
              switchOn={isToggle}
              onPress={() => onTogglePress()}
              circleColorOff="#FFFFFF"
              circleColorOn="#B342F2"
              backgroundColorOn="#FFFFFF"
              backgroundColorOff="#C4C4C4"
              containerStyle={{
                width: 37,
                height: 21,
                borderRadius: 25,
                borderColor: isToggle ? '#F1CAF9' : '#C4C4C4',
                borderWidth: 2,
              }}
              circleStyle={{
                width: 20,
                height: 20,
                borderRadius: 20,
              }}
            />
          </View>
          <TouchableOpacity style={styles.continueButton} onPress={onPressContinue}>
            <LinearGradient colors={['#32A0EE', '#9713C6']} start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0.5 }} style={styles.continueGradient}>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <Text style={styles.continueText}>{'Continue'}</Text>
              </View>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default SubscriptionAdModal;